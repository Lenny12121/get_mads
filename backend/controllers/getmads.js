const express = require('express');
const getMads = express.Router();
const userModel = require('../models/user');

//Multer
const multer = require('multer');
const path = require('path');
const helpers = require('../helpers');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

let upload = multer({ storage: storage }).single('file')

getMads.post('/uploads',function(req, res) {
     console.log(req.body)
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
          return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

});

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

//POST IMAGE ROUTE
// dashboardRouter.put('/:company', (req, res) => {
//   let upload = multer({ storage: storage, fileFilter: helpers.imageFilter }).single('logo');

//       upload(req, res, function(err) {                        
//           if (req.fileValidationError) {
//               res.send(req.fileValidationError);
//               return
//           }
  
//           User.findOne({company: req.params.company}, (err, foundUser) => {
//               foundUser.company = req.body.company;
//               foundUser.description= req.body.description;
//               for (let index = 0; index < foundUser.featureRequests.length; index++) {
//                   foundUser.featureRequests[index].companyName = req.body.company;
//               };

//               if (!req.file) {
//                   foundUser.save((err, data) => {
//                       res.redirect('/dashboard/' + foundUser.company);
//                   });
//               }  else {
//                   foundUser.logo = req.file.filename;
//                   foundUser.save((err, data) => {
//                       res.redirect('/dashboard/' + foundUser.company);
//                   });
//               }
//           }) 
//       })
// });


module.exports = getMads;