const express = require("express");
const router = express.Router();

// LOGIN (Send OTP)
router.post("/login", (req, res) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(400).json({ success: false, message: "Phone required" });
  }

  // Fake OTP
  res.json({
    success: true,
    message: "OTP sent",
    otp: "1234"
  });
});

// VERIFY OTP
router.post("/verify-otp", (req, res) => {
  const { otp } = req.body;

  if (otp === "1234") {
    return res.json({ success: true });
  }

  res.status(400).json({ success: false });
});

module.exports = router;