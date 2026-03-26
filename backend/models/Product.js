const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM('merchandise', 'beat', 'licensing', 'ticket'),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  sellerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
  digitalFileUrl: {
    type: DataTypes.STRING,
  },
  stockQuantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
