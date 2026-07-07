const express = require("express");
const router = express.Router();

const {
  createSlot,
  getSlots,
} = require("../controllers/slotController");

router.post("/", createSlot);
router.get("/", getSlots);

module.exports = router;