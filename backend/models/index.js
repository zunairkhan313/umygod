const sequelize = require('../config/db');
const User = require('./User');
const Song = require('./Song');
const Royalty = require('./Royalty');
const Product = require('./Product');
const Membership = require('./Membership');
const Collaboration = require('./Collaboration');
const Message = require('./Message');
const License = require('./License');

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

// Networking & Collaboration
User.hasMany(Collaboration, { foreignKey: 'artistId', as: 'initiatedCollaborations' });
User.hasMany(Collaboration, { foreignKey: 'producerId', as: 'joinedCollaborations' });
Collaboration.belongsTo(User, { foreignKey: 'artistId', as: 'artist' });
Collaboration.belongsTo(User, { foreignKey: 'producerId', as: 'producer' });

User.hasMany(Message, { foreignKey: 'senderId', as: 'sentMessages' });
User.hasMany(Message, { foreignKey: 'receiverId', as: 'receivedMessages' });
Message.belongsTo(User, { foreignKey: 'senderId', as: 'sender' });
Message.belongsTo(User, { foreignKey: 'receiverId', as: 'receiver' });

// Licensing
Song.hasMany(License, { foreignKey: 'songId' });
License.belongsTo(Song, { foreignKey: 'songId' });
User.hasMany(License, { foreignKey: 'buyerId' });
License.belongsTo(User, { foreignKey: 'buyer' });

module.exports = {
  sequelize,
  User,
  Song,
  Royalty,
  Product,
  Membership,
  Collaboration,
  Message,
  License
};
