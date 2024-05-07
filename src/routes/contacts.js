const express = require('express');
const router = express.Router();

const contactsController = require('../controlers/contacts');

router.get('/contacts', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingleContact);

module.exports = router;    