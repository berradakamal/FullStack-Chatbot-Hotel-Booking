const express = require('express');
const router = express.Router();
const { AddCustomer, saveBooking } = require('../controllers/customers')

// ADD CUSTOMER DATA
router.post('/add-customer', AddCustomer)
router.post('/save-booking', saveBooking)
module.exports = router