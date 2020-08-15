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

//POST ROUTE FOR USER CREATION
getMads.post('/', (req, res) => {
    // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      userModel.create(req.body, (error, createdUser) => {
        if (error) {
          res.status(400).json({ error: error.message });
        }
        res.status(200).send(createdUser); 
      });
    });

//UPDATE USER ROUTE
getMads.put('/:id', (req, res) => {
  userModel.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
    if (err)  {
      res.status(400).json({ error: err.message });
    }
    res.status(200).json(updatedUser);
  });
});

module.exports = getMads;