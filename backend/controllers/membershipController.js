const { Membership, User } = require('../models');

const getMembership = async (req, res) => {
  try {
    const membership = await Membership.findOne({ where: { userId: req.user.id } });
    if (membership) {
      res.json(membership);
    } else {
      res.status(404).json({ message: 'No active membership found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createOrUpdateMembership = async (req, res) => {
  try {
    const { tier } = req.body;
    let membership = await Membership.findOne({ where: { userId: req.user.id } });
    
    if (membership) {
      membership.tier = tier;
      membership.status = 'active';
      await membership.save();
    } else {
      membership = await Membership.create({
        userId: req.user.id,
        tier,
        status: 'active'
      });
    }
    res.json(membership);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const cancelMembership = async (req, res) => {
  try {
    const membership = await Membership.findOne({ where: { userId: req.user.id } });
    if (!membership) return res.status(404).json({ message: 'Membership not found' });
    
    membership.status = 'cancelled';
    await membership.save();
    res.json({ message: 'Membership cancelled' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getMembership,
  createOrUpdateMembership,
  cancelMembership
};
