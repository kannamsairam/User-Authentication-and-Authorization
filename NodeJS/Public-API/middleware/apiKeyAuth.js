const ApiKey = require('../models/ApiKey');

module.exports = async (req, res, next) => {
  const apiKey = req.header('x-api-key');
  if (!apiKey) return res.status(401).send('API key missing');
  
  const keyRecord = await ApiKey.findOne({ key: apiKey });
  if (!keyRecord) return res.status(401).send('Invalid API key');

  req.userId = keyRecord.user_id;
  next();
};