const express = require('express');
const router = express.Router();
const apiKeyAuth = require('../middleware/apiKeyAuth');
const { getProfile, getCandidates } = require('../controllers/publicController');

router.post('/public/profile', apiKeyAuth, getProfile);
router.get('/public/candidate', apiKeyAuth, getCandidates);

module.exports = router;