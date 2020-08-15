const express = require('express');
const getMads = express.Router();
const userModel = require('../models/user');

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
  console.log('this is the', req.body.email)
  userModel.findOne({ email: req.body.email }, (err, foundUser) =>  {
    console.log('This is the Found User:' , foundUser )
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
getMads.put('/id', (req, res) => {
  userModel.findByIdAndUpdate(req.body.id, req.body, { new: true }, (err, updatedUser) => {
    if (err)  {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(updatedUser);
  });
});

module.exports = getMads;