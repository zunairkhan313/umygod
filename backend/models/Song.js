const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Song = sequelize.define('Song', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  producerId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  isrc: {
    type: DataTypes.STRING,
  },
  metadata: {
    type: DataTypes.JSON,
  }
});

module.exports = Song;
