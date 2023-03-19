const express = require('express');
const router = express.Router();
const Cast = require('../models/casts');

// POST a new cast member
router.post('/', async (req, res) => {
  try {
    const cast = new Cast(req.body);
    await cast.save();
    res.status(201).send(cast);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all cast members
router.get('/', async (req, res) => {
  try {
    const casts = await Cast.find();
    res.status(200).send(casts);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a specific cast member by ID
router.get('/:id', async (req, res) => {
  try {
    const cast = await Cast.findById(req.params.id).populate('movies');
    if (!cast) {
      return res.status(404).send();
    }
    res.status(200).send(cast);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE a cast member by ID
router.put('/:id', async (req, res) => {
  try {
    const cast = await Cast.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cast) {
      return res.status(404).send();
    }
    res.status(200).send(cast);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a cast member by ID
router.delete('/:id', async (req, res) => {
  try {
    const cast = await Cast.findByIdAndDelete(req.params.id);
    if (!cast) {
      return res.status(404).send();
    }
    res.status(200).send(cast);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
