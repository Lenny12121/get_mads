const mongoose = require('mongoose');

const connection = "mongodb+srv://Lenny:Crabtree40@getmads.8xgth.azure.mongodb.net/getmads?retryWrites=true&w=majority";
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));