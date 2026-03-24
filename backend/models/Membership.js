const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Membership = sequelize.define('Membership', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  tier: {
    type: DataTypes.ENUM('basic', 'premium', 'vip'),
    defaultValue: 'basic',
  },
  status: {
    type: DataTypes.ENUM('active', 'inactive', 'cancelled'),
    defaultValue: 'active',
  }
});

module.exports = Membership;
