const express = require('express');
const router = express.Router();
const { 
  createCollaboration, 
  getCollaborations, 
  joinCollaboration, 
  sendMessage, 
  getMessages 
} = require('../controllers/networkingController');
const { protect } = require('../middleware/authMiddleware');

router.get('/collaborations', getCollaborations);
router.post('/collaborations', protect, createCollaboration);
router.post('/collaborations/:id/join', protect, joinCollaboration);

router.post('/messages', protect, sendMessage);
router.get('/messages/:userId', protect, getMessages);

module.exports = router;
