const express = require('express');
const app = express();
const path = require('path');
const PORT = 3003;
const mongoose = require('mongoose');
const cors = require('cors');

//check mongoose connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads'
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...')
});

//middleware
app.use(express.json());
app.use(express.static(path.join("public/build")));

//CORS
// const whitelist = ['http://localhost:3000'];
// const corsOptions = {
//   origin: (origin, callback) => {
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
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, "public/build", "index.html"));
});

//listeners
app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })

