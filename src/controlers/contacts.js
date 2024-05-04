require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const MONGO_URI = process.env.MONGO_URI

app.use(express.json());

const client = new MongoClient(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = client; 