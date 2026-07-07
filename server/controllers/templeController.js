const Temple = require("../models/Temple");

// Add Temple
exports.addTemple = async (req, res) => {
  try {
    const temple = await Temple.create(req.body);

    res.status(201).json({
      message: "Temple Added Successfully",
      temple,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Temples
exports.getTemples = async (req, res) => {
  try {
    const temples = await Temple.find();

    res.status(200).json(temples);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get Single Temple
exports.getTempleById = async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);

    res.status(200).json(temple);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Update Temple
exports.updateTemple = async (req, res) => {
  try {
    const temple = await Temple.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Temple Updated Successfully",
      temple,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Delete Temple
exports.deleteTemple = async (req, res) => {
  try {
    await Temple.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Temple Deleted Successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};