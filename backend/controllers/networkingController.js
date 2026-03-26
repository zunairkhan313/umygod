const { Collaboration, Message, User } = require('../models');

// --- Collaborations ---

const createCollaboration = async (req, res) => {
  try {
    const { title, description, budget, deadline } = req.body;
    const collaboration = await Collaboration.create({
      title,
      description,
      budget,
      deadline,
      artistId: req.user.id
    });
    res.status(201).json(collaboration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCollaborations = async (req, res) => {
  try {
    const collaborations = await Collaboration.findAll({
      include: [
        { model: User, as: 'artist', attributes: ['username', 'profilePicture'] },
        { model: User, as: 'producer', attributes: ['username', 'profilePicture'] }
      ]
    });
    res.json(collaborations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const joinCollaboration = async (req, res) => {
  try {
    const collaboration = await Collaboration.findByPk(req.params.id);
    if (!collaboration) return res.status(404).json({ message: 'Collaboration not found' });
    
    if (collaboration.status !== 'open') {
      return res.status(400).json({ message: 'Collaboration is no longer open' });
    }

    collaboration.producerId = req.user.id;
    collaboration.status = 'in_progress';
    await collaboration.save();
    
    res.json(collaboration);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// --- Messages ---

const sendMessage = async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const message = await Message.create({
      senderId: req.user.id,
      receiverId,
      content
    });
    res.status(201).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: {
        [require('sequelize').Op.or]: [
          { senderId: req.user.id, receiverId: req.params.userId },
          { senderId: req.params.userId, receiverId: req.user.id }
        ]
      },
      order: [['createdAt', 'ASC']]
    });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createCollaboration,
  getCollaborations,
  joinCollaboration,
  sendMessage,
  getMessages
};
