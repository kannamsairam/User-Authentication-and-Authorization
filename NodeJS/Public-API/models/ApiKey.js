const mongoose = require('mongoose');

const ApiKeySchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  key: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('ApiKey', ApiKeySchema);