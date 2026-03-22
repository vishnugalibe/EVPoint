const express = require("express");
const fs = require("fs");
const router = express.Router();

const FILE = "./data/bookings.json";

// Helper functions
function readData() {
  return JSON.parse(fs.readFileSync(FILE));
}

function writeData(data) {
  fs.writeFileSync(FILE, JSON.stringify(data, null, 2));
}

// GET SLOTS
router.get("/slots", (req, res) => {
  res.json([
    { id: 1, time: "10:00 AM", available: true },
    { id: 2, time: "11:00 AM", available: true },
    { id: 3, time: "12:00 PM", available: false }
  ]);
});

// BOOK SLOT
router.post("/book", (req, res) => {
  const bookings = readData();

  const newBooking = {
    id: Date.now(),
    ...req.body
  };

  bookings.push(newBooking);
  writeData(bookings);

  res.json({ success: true, booking: newBooking });
});

module.exports = router;