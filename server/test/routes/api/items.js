import assert from 'assert';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import session from 'supertest-session';

import helper from '../../helper.js';
import app from '../../../app.js';
import models from '../../../models/index.js';
import router from '../../../routes/index.js';


describe('/api/items', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['items']);
    testSession = session(app);
  });

 

  it('creates a new Item record', async () => {
    const response = await testSession.post('/api/items')
    .send({Title: 'Create title 1', Text: 'Create table in database 1', VideoLink: 'https://www.youtube.com/watch?v=QnDWIZuWYW0', Name: 'Create table 1'})
    .expect(StatusCodes.CREATED);

    const record = await models.Item.findByPk(response.body.id);;
    assert.deepStrictEqual(record.Title, 'Create title 1');
    assert.deepStrictEqual(record.Text, 'Create table in database 1');
    assert.deepStrictEqual(record.VideoLink, 'https://www.youtube.com/watch?v=QnDWIZuWYW0');
    assert.deepStrictEqual(record.Name, 'Create table 1');
  });


  it('updates an Item record', async () => {
    await testSession.patch('/api/items/81273098')
      .send({
        Title: 'Update title 1',
        Text: 'Update table in database 1',
        VideoLink: 'https://www.youtube.com/watch?v=QnDWIZuWYW0',
        Name: 'Update table 1'
      })
      .expect(StatusCodes.OK);
    const record = await models.Item.findByPk(81273098);
    assert.deepStrictEqual(record.Title, 'Update title 1');
    assert.deepStrictEqual(record.Text, 'Update table in database 1');
    assert.deepStrictEqual(record.VideoLink, 'https://www.youtube.com/watch?v=QnDWIZuWYW0');
    assert.deepStrictEqual(record.Name, 'Update table 1');
    });


  it('deletes an existing Item record', async () => {
    await testSession.delete('/api/items/81273098').expect(StatusCodes.OK);
    const record = await models.Item.findByPk(81273098);
    assert.deepStrictEqual(record, null);
  });

  it('fetch all items from the items table', async () => {
    try{
        const response = await testSession.get('/api/items').expect(StatusCodes.OK);
        assert.deepStrictEqual(response.body?.length, 4);
    } catch(err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERR).end();
    }
    
  });

  it('fetch a single item from the items table', async () => {
    try {
        const response = await testSession.get('/api/items/81273098').expect(StatusCodes.OK);
        assert.deepStrictEqual(response.body?.Title, 'fixture title test 1');
    } catch(err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERR).end();
    }
  });

});