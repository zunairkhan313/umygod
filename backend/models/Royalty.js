const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Royalty = sequelize.define('Royalty', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  songId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
  splits: {
    type: DataTypes.JSON,
  }
});

module.exports = Royalty;
