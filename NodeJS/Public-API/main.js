require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const connection = require('./config/db');

const app = express();
const PORT = 3000;
const SECRET_KEY = process.env.SECRET_KEY; // You should store this in an environment variable

app.use(express.json());

// Middleware to authenticate JWT
const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.sendStatus(403);

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

// Fetch all users (protected route)
app.get('/users', authenticateToken, async (req, res) => {
  try {
    const [results] = await connection.query('SELECT * FROM Users');
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});