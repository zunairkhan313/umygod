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
  },
  audioUrl: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  coverArtUrl: {
    type: DataTypes.STRING,
  },
  genre: {
    type: DataTypes.STRING,
  },
  releaseDate: {
    type: DataTypes.DATE,
  },
  bpm: {
    type: DataTypes.INTEGER,
  },
  key: {
    type: DataTypes.STRING,
  },
});

module.exports = Song;
