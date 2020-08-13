const express = require('express');
const getMads = express.Router();
const userModel = require('../models/user');

getMads.post('/', (req, res) => {
    // req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
      userModel.create(req.body, (error, createdUser) => {
        if (error) {
          res.status(400).json({ error: error.message })
        }
        res.status(200).send(createdUser) 
        console.log(createdUser);
      })
    })

module.exports = getMads;