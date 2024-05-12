const mongodb = require('../connect');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
    const result = await mongodb.getDB().db().collection('contacts').find();
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists);
    });
  };

const getSingleContact = async (req, res) => {
  const userId = req.params.id.length === 24 ? new ObjectId(req.params.id) : req.params.id;
    console.log(userId)
    const result = await mongodb
      .getDB()
      .db()
      .collection('contacts')
      .find({ _id: userId});
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  };

  const createContact = async (req, res) => {
    const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
    };
    const response = await mongodb.getDB().db().collection('contacts').insertOne(contact);
    if(response.acknowledged){
      res.status(201).json(response);
    }else{
      res.status(500).json(response);
    }
};

const updateContact = async (req, res) => {

  const userId = req.params.id.length === 24 ? new ObjectId(req.params.id) : req.params.id;
  const contact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      favoriteColor: req.body.favoriteColor,
      birthday: req.body.birthday
  }
  const result = await mongodb.getDB().db().collection('contacts').replaceOne({_id: userId}, contact);
  res.status(204).json(result);
}

const deleteContact = async (req, res) => {

  const userId = req.params.id.length === 24 ? new ObjectId(req.params.id) : req.params.id;
  const result = await mongodb.getDB().db().collection('contacts').deleteOne({_id: userId});
  res.status(200).json(result);
}
module.exports = {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact, 
    deleteContact
}