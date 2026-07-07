const express = require("express");
const router = express.Router();

const {
  addTemple,
  getTemples,
  getTempleById,
  updateTemple,
  deleteTemple,
} = require("../controllers/templeController");

router.post("/", addTemple);
router.get("/", getTemples);
router.get("/:id", getTempleById);
router.put("/:id", updateTemple);
router.delete("/:id", deleteTemple);

module.exports = router;