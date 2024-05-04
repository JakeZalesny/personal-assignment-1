const express = require('express');
const router = express.Router();
const client = require('../controlers/contacts');

router.get('/', async (req, res) => {
    try {
        const database = client.db();
        const collection = database.collection('contacts');

        const result = await collection.find({}).toArray();
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

router.get('/one', async (req, res) => {
    try {
        const database = client.db();
        const collection = database.collection('contacts');

        const result = await collection.findOne({firstName: "Nesha"}); // Retrieves only one document
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send(err);
    }
});

module.exports = router;