const axios = require('axios');
const ApiKey = require('../models/ApiKey');

exports.getProfile = async (req, res) => {
  try {
    const apiKey = req.header('x-api-key');
    const keyRecord = await ApiKey.findOne({ key: apiKey });
    if (!keyRecord) return res.status(401).send('Invalid API key');
    
    const response = await axios.get(`http://localhost:3000/api/user/${keyRecord.user_id}`);
    res.json(response.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getCandidates = async (req, res) => {
  try {
    const apiKey = req.header('x-api-key');
    const keyRecord = await ApiKey.findOne({ key: apiKey });
    if (!keyRecord) return res.status(401).send('Invalid API key');
    
    const response = await axios.get(`http://localhost:3000/api/candidate`, {
      headers: { Authorization: `Bearer ${keyRecord.token}` }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).send(err.message);
  }
};