import express from 'express';
import { StatusCodes } from 'http-status-codes';
import _ from 'lodash';

import models from '../../models/index.js';
import interceptors from '../interceptors.js';
import helpers from '../helpers.js';

const router = express.Router();

router.patch('/:id', async(req, res) => {
    try {
        const record = await models.Item.findByPk(req.params.id);
        if (record) {
            await record.update(_.pick(req.body, ['Title', 'Text','VideoLink','Name']));
            res.json(record.toJSON());
        } else {
            res.status(StatusCodes.NOT_FOUND).end();
        }
    } catch(err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERR).end();
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const record = await models.Item.findByPk(req.params.id);
        await record.destroy();
        res.status(StatusCodes.OK).end();
       
    } catch(err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERR).end();
    }
});

router.get('/', async(req, res) => {
    const records = await models.Item.findAll();
    res.json(records.map((r) => r.toJSON()));
});

router.get('/:id', async(req, res) => {
    const records = await models.Item.findByPk(req.params.id);
    if (records) {
        res.json(records.toJSON());
    } else {
        res.status(StatusCodes.NOT_FOUND).end();
    }
});

router.post('/', async(req, res) => { 
    try {
        const record = await models.Item.create(_.pick(req.body, ['Title', 'Text','VideoLink','Name']));
        res.status(StatusCodes.CREATED).json(record.toJSON());
    } catch(err) {
        console.log(err);
        res.status(StatusCodes.INTERNAL_SERVER_ERR).end();
    }
});


export default router;