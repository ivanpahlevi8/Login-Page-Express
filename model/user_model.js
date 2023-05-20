const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'fill first name'],
        maxlength: [20, 'first name character must not more than 20'],
    },
    middleName: {
        type: String,
        required: false,
        maxlength: [20, 'middle name character must not more than 20']
    },
    lastName: {
        type: String,
        required: [true, 'please provide last name'],
        maxlength: [20, 'last name must not more than 20']
    },
    age: {
        type: String,
        required: [true, 'please provide age']
    },
    address: {
        type: String,
        required: [true, 'please provide address'],
        trim: true
    },
    username: {
        type: String,
        required: [true, 'please provide username'],
        maxlength: [20, 'username must not more than 20']
    },
    password: {
        type: String,
        required: [true, 'please provide password']
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = { userModel }