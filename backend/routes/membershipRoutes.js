const express = require('express');
const router = express.Router();
const { 
  getMembership, 
  createOrUpdateMembership, 
  cancelMembership 
} = require('../controllers/membershipController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getMembership);
router.post('/', protect, createOrUpdateMembership);
router.post('/cancel', protect, cancelMembership);

module.exports = router;
