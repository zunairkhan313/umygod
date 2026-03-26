const { Song, User } = require('../models');

// @desc    Upload new music track
// @route   POST /api/music/upload
// @access  Private (Artist/Producer)
const uploadMusic = async (req, res) => {
  const { title, isrc, metadata, genre, releaseDate, bpm, key, audioUrl, coverArtUrl } = req.body;
  
  try {
    const song = await Song.create({
      title,
      artistId: req.user.id,
      isrc,
      genre,
      releaseDate,
      bpm,
      key,
      audioUrl: audioUrl || (req.file ? req.file.path : null),
      coverArtUrl,
      metadata: metadata ? (typeof metadata === 'string' ? JSON.parse(metadata) : metadata) : {}
    });
    res.status(201).json(song);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get all songs with artist info
// @route   GET /api/music
// @access  Public
const getSongs = async (req, res) => {
  try {
    const songs = await Song.findAll({
      include: [{ model: User, as: 'artist', attributes: ['username', 'profilePicture'] }]
    });
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get song by ID
// @route   GET /api/music/:id
// @access  Public
const getSongById = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id, { 
      include: [{ model: User, as: 'artist', attributes: ['username', 'profilePicture', 'bio'] }] 
    });
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ message: 'Song not found' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update song metadata
// @route   PUT /api/music/:id
// @access  Private (Artist)
const updateSong = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });

    if (song.artistId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    const { title, isrc, metadata, genre, releaseDate, bpm, key, coverArtUrl } = req.body;
    
    song.title = title || song.title;
    song.isrc = isrc || song.isrc;
    song.genre = genre || song.genre;
    song.releaseDate = releaseDate || song.releaseDate;
    song.bpm = bpm || song.bpm;
    song.key = key || song.key;
    song.coverArtUrl = coverArtUrl || song.coverArtUrl;
    song.metadata = metadata ? { ...song.metadata, ...(typeof metadata === 'string' ? JSON.parse(metadata) : metadata) } : song.metadata;

    const updatedSong = await song.save();
    res.json(updatedSong);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a song
// @route   DELETE /api/music/:id
// @access  Private (Artist/Admin)
const deleteSong = async (req, res) => {
  try {
    const song = await Song.findByPk(req.params.id);
    if (!song) return res.status(404).json({ message: 'Song not found' });

    if (song.artistId !== req.user.id && req.user.role !== 'admin') {
      return res.status(401).json({ message: 'Not authorized' });
    }

    await song.destroy();
    res.json({ message: 'Song removed' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  uploadMusic,
  getSongs,
  getSongById,
  updateSong,
  deleteSong
};
