const { DataTypes } = require('sequelize'); const sequelize = require('../index');

const Candidate = sequelize.define('Candidate', { first_name: { type: DataTypes.STRING, allowNull: false }, last_name: { type: DataTypes.STRING, allowNull: false }, email: { type: DataTypes.STRING, allowNull: false }, user_id: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Users', key: 'id' } } });

module.exports = Candidate;