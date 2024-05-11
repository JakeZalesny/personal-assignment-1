const express = require('express');
const router = express.Router();

const contactsController = require('../controlers/contacts');

router.get('/', contactsController.getAllContacts);

router.get('/contacts', contactsController.getAllContacts);

router.get('/:id', contactsController.getSingleContact);

router.post('/', contactsController.createContact);

router.put('/:id', contactsController.updateContact);

router.delete('/:id', contactsController.deleteContact);

module.exports = router;    