const mongoose = require('mongoose');

//defining booking table schema
const BookingSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    ArrivalDate: {
        type: Date
    },
    DepertureDate: {
        type: Date,
    },
    Sayingdays: {
        type: Number,
        trim: true
    },
    TotalGuests: {
        type: Number,
        trim: true
    },
    Email: {
        type: String,
        trim: true
    },
    ContactNo: {
        type: String,
        trim: true
    }
});

const bookingRequest = mongoose.model('bookingRequest', BookingSchema);
module.exports = bookingRequest;