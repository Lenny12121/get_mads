const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3003;
const mongoose = require('mongoose');
// const cors = require('cors');
// require('./database');

//check mongoose connection
// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads'
// mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongoose...')
// });

// require('dotenv').config();

// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads'
// mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
// mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
// mongoose.connection.once('open', ()=>{
//     console.log('connected to mongoose...');
// });

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public/build")));

//CORS
// const whitelist = ['http://localhost:3000', 'https://rocky-basin-96559.herokuapp.com'];
// const corsOptions = {
//   origin: (origin, callback) => {
//     console.log('this is the origin: ', origin)
//     console.log('this is the callback: ', callback)
//     if (whitelist.indexOf(origin) >= 0) {
//       callback(null, true);
//     } else {
//       callback(new Error('Not allowed by CORS'));
//     }
//   },
// };

// app.use(cors(corsOptions));

//controllers
const getMadsController = require('./controllers/getmads.js');
app.use('/api', getMadsController);
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "../build"));
// });

app.use(express.static(__dirname + '/client/build/'));

app.get('*', (req,res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

//listeners
app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })

