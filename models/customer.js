const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
})

module.exports = Customer = mongoose.model('Customer', customerSchema)