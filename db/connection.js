const mongoose = require('mongoose');

// const connection = "mongodb+srv://Lenny:Crabtree40@getmads.8xgth.azure.mongodb.net/getmads?retryWrites=true&w=majority";
// mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
//     .then(() => console.log("Database Connected Successfully"))
//     .catch(err => console.log(err));

require('dotenv').config();

// const MongoClient = require("mongodb").MongoClient;
// const client = await new MongoClient(process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads',{ useNewUrlParser: true});
// client.connect();
// mongoose.connection.once('open', () => { console.log('MongoDB Connected'); });
// mongoose.connection.on('error', (err) => { console.log('MongoDB connection error: ', err); }); 

// const mongoose = require('mongoose');
// const MongoClient = require('mongodb').MongoClient;


// const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads'
const MONGODB_URI = 'mongodb+srv://Lenny:Crabtree40@getmads.8xgth.azure.mongodb.net/GetMads?retryWrites=true&w=majority'
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod not running?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.once('open', ()=>{
    console.log('connected to mongoose...');
});





module.exports = mongoose;

// const MongoClient = require("mongodb").MongoClient;
// require('dotenv').config();


// const dbConnectionUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/getmads';

// function initialize(
//     dbName,
//     dbCollectionName,
//     successCallback,
//     failureCallback
// ) {
//     MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
//         if (err) {
//             console.log(`[MongoDB connection] ERROR: ${err}`);
//             failureCallback(err); // this should be "caught" by the calling function
//         } else {
//             const dbObject = dbInstance.db(dbName);
//             const dbCollection = dbObject.collection(dbCollectionName);
//             console.log("[MongoDB connection] SUCCESS");

//             successCallback(dbCollection);
//         }
//     });
// }

// module.exports = {
//     initialize
// };