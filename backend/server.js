const express = require('express');
const app = express();
const path = require('path');
const PORT = 3003;
const mongoose = require('mongoose');

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

//controllers
const getMadsController = require('./controllers/getmads.js');
app.use('/getmads', getMadsController);
app.use((req, res, next) => {
    res.sendFile(path.resolve(__dirname, "public/build", "index.html"));
});

//listeners
app.listen(PORT, () => {
    console.log('🎉🎊', 'celebrations happening on port', PORT, '🎉🎊',)
  })

