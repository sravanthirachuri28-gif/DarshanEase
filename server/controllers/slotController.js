const DarshanSlot = require("../models/DarshanSlot");

// Create Slot
exports.createSlot = async (req, res) => {
  try {
    const slot = await DarshanSlot.create(req.body);

    res.status(201).json({
      message: "Slot Created Successfully",
      slot,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Slots
exports.getSlots = async (req, res) => {
  try {
    const slots = await DarshanSlot.find().populate("temple");

    res.json(slots);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};