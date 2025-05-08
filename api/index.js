// api/index.js (Vercel Serverless Function)

import axios from 'axios';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxPmiKHVixu0-Rrdv2GmEVZxbQFtBJS40E_Al7Izp7FZWEX5UaPZj5MzmeLfevuqw-N/exec";

  try {
    const response = await axios.post(GOOGLE_SCRIPT_URL, req.body, {
      headers: { 'Content-Type': 'application/json' }
    });

    return res.status(200).json({
      status: 'forwarded',
      response: response.data
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error.message
    });
  }
}
