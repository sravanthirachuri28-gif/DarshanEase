const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    deity: { type: String, required: true },
    timings: { type: String, required: true },
    image: { type: String, default: "" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Temple", templeSchema);