// models/index.js

const sequelize = require('../config/sequelize');
const User = require('./User');

const initModels = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sync all defined models to the DB
    await sequelize.sync({ force: true }); // force: true will drop the table if it already exists
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

module.exports = {
  initModels,
  User
};
