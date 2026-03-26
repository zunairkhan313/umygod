const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Collaboration = sequelize.define('Collaboration', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.ENUM('open', 'in_progress', 'completed', 'cancelled'),
    defaultValue: 'open',
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  producerId: {
    type: DataTypes.INTEGER,
  },
  budget: {
    type: DataTypes.DECIMAL(10, 2),
  },
  deadline: {
    type: DataTypes.DATE,
  }
});

module.exports = Collaboration;
