const express = require("express");
const fs = require("fs");
const router = express.Router();

const FILE = "./data/bookings.json";

router.get("/history", (req, res) => {
  const data = JSON.parse(fs.readFileSync(FILE));
  res.json(data);
});

module.exports = router;