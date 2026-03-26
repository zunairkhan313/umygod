const express = require('express');
const router = express.Router();
const { uploadMusic, getSongs, getSongById, updateSong, deleteSong } = require('../controllers/musicController');
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

// Configure multer for local upload (MVP)
const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename(req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
const upload = multer({ storage });

router.get('/', getSongs);
router.post('/upload', protect, upload.single('track'), uploadMusic);

router.route('/:id')
  .get(getSongById)
  .put(protect, updateSong)
  .delete(protect, deleteSong);

module.exports = router;
