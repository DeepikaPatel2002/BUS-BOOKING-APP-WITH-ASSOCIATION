const Booking = require('../models/booking');
const User = require('../models/user');
const Bus = require('../models/bus');

exports.createBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;

        const newBooking = await Booking.create({
            UserId: userId,
            BusId: busId,
            seatNumber
        });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
}

exports.getUserBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: {
                UserId: parseInt(req.params.id)
            },
            include: [{ model: Bus, attributes: ['busNumber'] }],
            raw: false
        });
        console.log('bookings:', bookings);
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
}

exports.getBusBookings = async (req, res) => {
    try {
        const bookings = await Booking.findAll({
            where: {
                BusId: parseInt(req.params.id)
            },
            include: [{ model: User, attributes: ['name', 'email'] }],
            raw: false
        });
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ 'error': error.message });
    }
}
  
