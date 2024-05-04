require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

modules.exports = client; 