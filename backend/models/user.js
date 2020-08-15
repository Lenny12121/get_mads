const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    email: {type: String, required: true, unique: true},
},  {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);