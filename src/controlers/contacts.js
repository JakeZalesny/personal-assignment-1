const mongodb = require('../connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDB().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

const getSingleContact = async (req, res, next) => {
  
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDB()
      .db()
      .collection('contacts')
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

const createContact = async (req, res, next) => {

    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday 
  };
  const result = await mongodb.getDB().db().collection('contacts').insertOne(contact);
  res.status(201).json(result);
};

const updateContact = async (req, res, next) => {

    const userId = new ObjectId(req.params.id);
    const contact = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday
    }
    const result = await mongodb.getDB().db().collection('contacts').updateOne({_id: userId}, {$set: contact});
    res.status(204).json(result);
}

const deleteContact = async (req, res, next) => {

    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDB().db().collection('contacts').deleteOne({_id: userId});
    res.status(200).json(result);
}
module.exports = {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact
}