import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Item', () => {
  beforeEach(async () => {
    await helper.loadFixtures(['items']);
  });

  it('creates a new Item record', async () => {
    assert.deepStrictEqual(await models.Item.count(), 4);
    const record = await models.Item.create({
      Title: 'This is a test title',
      Text: 'This is longer descriptive text',
    });

    assert.deepStrictEqual(await models.Item.count(), 5);
    assert.deepStrictEqual(record.Title, 'This is a test title');
    assert.deepStrictEqual(record.Text, 'This is longer descriptive text');
  });

  it('finds an Item record by ID', async () => {
    const record = await models.Item.findByPk(81273098);
    assert.deepStrictEqual(record.Title, 'fixture title test 1');
    assert.deepStrictEqual(record.Text, 'fixture text test 1');
  });

  it('finds multiple Item records', async () => {
    const record = await models.Item.findAll({
      order: [['Title', 'DESC']],
    });

    assert.deepStrictEqual(record.length, 4);
    assert.deepStrictEqual(record[0].Title, 'fixture title test 4');
  });

  it('deletes an Item record', async () => {
    assert.deepStrictEqual(await models.Item.count(), 4);
    const record = await models.Item.findByPk(81273098);
    await record.destroy();
    assert.deepStrictEqual(await models.Item.count(), 3);
  });
});
