const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    companyName: {type: String, default: 'Awesome Company'},
    plan: {type: String, default: 'Standard'},
    planQuantity: {type: Number, default: '44'},
    type: {type: String},
    email: {type: String, required: true, unique: true},
    imageURL: {type: String},
},  {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema);