import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import models from '../../models/index.js';
import interceptors from '../interceptors.js';
import helpers from '../helpers.js';

const router = express.Router();

router.get('/', async(req, res) => {
    const records = await models.Item.findAll();
    res.json(records.map((r) => r.toJSON()));
});

export default router;