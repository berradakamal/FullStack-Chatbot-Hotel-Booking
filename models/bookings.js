const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = Schema({
    customer: { type: Schema.Types.ObjectId, ref: "Customer" },
    createdAt: { type: Date, default: Date.now() },
    fromDate: { type: Date, required: true },
    toDate: { type: Date, required: true },


})

module.exports = Booking = mongoose.model('Booking', bookingSchema)