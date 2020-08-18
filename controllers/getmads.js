const express = require('express');
const getMads = express.Router();
const userModel = require('../models/user');

//NEW
const MongoClient = require('mongodb').MongoClient;

// replace the uri string with your connection string.
const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads';
MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("GetMads").collection("users");

//INDEX ROUTE TO SEE ALL USERS
getMads.get('/', (req, res) => {
  userModel.find({}, (err, foundUsers) => {
    if (err)  {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUsers);
  });
});

//FIND USER BY ID
getMads.get('/user', (req, res) => {
  userModel.findOne({ email:req.body.email}, (err, foundUser) =>  {
    if (err) {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(foundUser);
  })
})

//POST ROUTE FOR CHECKING IF USER EXISTS IF NOT USER CREATION
getMads.post('/user', (req, res) => {
  userModel.findOne({ authId: req.body.authId }, (err, foundUser) =>  {
    if (foundUser == null)  {
      userModel.create(req.body, (error, createdUser) => {
        console.log('This is the created User:' , createdUser )
        if (error) {
          return res.status(400).json({ error: error.message });
        }
        res.status(200).send(createdUser); 
      })
    } else if (err) {
      res.status(400).json({ error: error.message })
    } else {
      res.status(200).send(foundUser);
    }
  })      
});

//UPDATE USER ROUTE
getMads.put('/update', (req, res) => {
  console.log('this is the req.body:', req.body)
  userModel.findOneAndUpdate({ authId: req.body.authId }, req.body, { new: true }, (err, updatedUser) => {
    if (err)  {
      res.status(400).json({ error: err.message });
    }
    res.status(200).send(updatedUser);
  });
});

client.close();
});

module.exports = getMads;