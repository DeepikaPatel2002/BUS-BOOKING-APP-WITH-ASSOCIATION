
const express = require('express');
const router = express.Router();

const busController = require('../controller/busController');
const bookingController = require('../controller/bookingController');

router.post('/', busController.createBus)
router.get('/', busController.getAllBuses);       
router.get('/bookings/:id', bookingController.getBusBookings);

module.exports = router;


