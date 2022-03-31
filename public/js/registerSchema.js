const mongoose = require('mongoose');

//defining schema for register form 
const registerSchema = new mongoose.Schema({
    Username: { type: String, trim: true },
    Gmail: { type: String, trim: true },
    contactNo: { type: Number, trim: true },
    password: { type: String, trim: true }
});

const user_Register = mongoose.model('user_Register', registerSchema);
module.exports = user_Register;