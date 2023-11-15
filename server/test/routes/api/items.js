import assert from 'assert';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';
import session from 'supertest-session';

import helper from '../../helper.js';
import app from '../../../app.js';

describe('/api/items', () => {
  let testSession;

  beforeEach(async () => {
    await helper.loadFixtures(['items']);
    testSession = session(app);
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