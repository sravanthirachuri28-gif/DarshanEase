const Booking = require("../models/Booking");

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create(req.body);

    res.status(201).json({
      message: "Booking Successful",
      booking,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Bookings
exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate({
        path: "slot",
        populate: { path: "temple" },
      });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};