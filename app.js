require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./src/routes/contacts');
const mongodb = require('./src/connect');

const port = process.env.PORT || 8080;
const app = express();

app
    .use(bodyParser.json())
    .use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        next();
    })
    .use('/', router);

    mongodb.initDb((err, mongodb) => {
        if (err) {
          console.log(err);
        } else {
          app.listen(port);
          console.log(`Connected to DB and listening on ${port}`);
        }
      });