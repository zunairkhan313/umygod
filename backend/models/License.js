const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const License = sequelize.define('License', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  songId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  buyerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  licenseType: {
    type: DataTypes.ENUM('exclusive', 'non-exclusive', 'sync', 'performance'),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  terms: {
    type: DataTypes.TEXT,
  },
  purchaseDate: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
});

module.exports = License;
