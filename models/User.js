const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    bio: {
        type: String,
    },
    mobileNumber: {
        type: String,
    },
    password: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
    },
    profileimg: {
        type: String,
    }
}, { timestamps: true })

module.exports = mongoose.model('User', UserSchema);