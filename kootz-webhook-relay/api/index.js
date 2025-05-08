const express = require("express");
const axios = require("axios");
const app = express();

app.use(express.json());

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPmiKHVixu0-Rrdv2GmEVZxbQFtBJS40E_Al7Izp7FZWEX5UaPZj5MzmeLfevuqw-N/exec";

app.post("/", async (req, res) => {
  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
      headers: { "Content-Type": "application/json" }
    });

    res.status(200).json({
      status: "forwarded",
      response: response.data
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: "error", message: err.message });
  }
});

module.exports = app;
