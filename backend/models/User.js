const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.ENUM('artist', 'fan', 'admin', 'producer'),
    defaultValue: 'fan',
  },
  bio: {
    type: DataTypes.TEXT,
  },
  profilePicture: {
    type: DataTypes.STRING,
  },
  socialLinks: {
    type: DataTypes.JSON,
  },
  balance: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0.00,
  },
});

module.exports = User;
