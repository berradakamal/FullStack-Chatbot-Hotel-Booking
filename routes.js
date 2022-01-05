const express = require('express');
const router = express.Router();
const { bookings } = require('./controllers/bookings')

router.get('/api/bookings', bookings)