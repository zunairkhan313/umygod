const sequelize = require('../config/db');
const User = require('./User');
const Song = require('./Song');
const Royalty = require('./Royalty');
const Product = require('./Product');
const Membership = require('./Membership');

// Associations
User.hasMany(Song, { foreignKey: 'artistId', as: 'songs' });
Song.belongsTo(User, { foreignKey: 'artistId', as: 'artist' });

Song.hasMany(Royalty, { foreignKey: 'songId' });
Royalty.belongsTo(Song, { foreignKey: 'songId' });

User.hasMany(Royalty, { foreignKey: 'userId' });
Royalty.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Product, { foreignKey: 'sellerId' });
Product.belongsTo(User, { foreignKey: 'sellerId' });

User.hasOne(Membership, { foreignKey: 'userId' });
Membership.belongsTo(User, { foreignKey: 'userId' });

module.exports = {
  sequelize,
  User,
  Song,
  Royalty,
  Product,
  Membership
};
