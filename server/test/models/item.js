import assert from 'assert';
import _ from 'lodash';
import path from 'path';
import { v4 as uuid } from 'uuid';

import helper from '../helper.js';
import models from '../../models/index.js';

describe('models.Item', () => {
  beforeEach(async () => {
    await helper.loadFixtures([]);
  });

  it('creates a new Item record', async () => {
    assert.deepStrictEqual(await models.Item.count(), 0);
    const record = await models.Item.create({
      Title: 'This is a test title',
      Text: 'This is longer descriptive text',
    });

    assert.deepStrictEqual(await models.Item.count(), 1);
    assert.notDeepStrictEqual(record.id, null);
    assert.deepStrictEqual(record.Title, 'This is a test title');
    assert.deepStrictEqual(record.Text, 'This is a longer descriptive text');
  });
});
