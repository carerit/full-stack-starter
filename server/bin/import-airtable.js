#!/usr/bin/env node
import fetch from 'node-fetch';
import models from '../models/index.js';

const token = 'patpzeJGcJ0aHfK6J.e9011b3d993570931a90fb1f5597cd7c07304a39fd3cbbd97b5eb2c2c5c4cbe5';
const url = 'https://api.airtable.com/v0/appvoUbpT81hh1l9f/Table%201?view=Grid%20view';

fetch(url, {
  headers: { Authorization: `Bearer ${token}` },
})
  .then((response) => response.json())
  .then(async (data) => {
    //console.log(data);

    

    for (const record of data.records) {
      await models.Item.create({
        Title: record.fields.Title,
        Text: record.fields.Text,
        VideoLink: record.fields.vidLink,
      });
    }
  });
