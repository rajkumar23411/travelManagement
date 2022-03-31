const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    ArrivalDate: {
        type: Date,
    },
    DepertureDate: {
        type: Date
    },
    TotalDays: {
        type: Number
    },
    TotalGuests: {
        type: Number
    },
    Email: {
        type: String,
        trim: true
    }
})