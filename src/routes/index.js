require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

let db; 
let contactsCollection; 

client.connect((err) => {
    if (err) {
      console.error('Error occurred while connecting to MongoDB', err);
      return;
    }
    console.log('Connected to MongoDB');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});