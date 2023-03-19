const express = require('express');
const router = express.Router();
const Review = require('../models/reviews');

// POST a new review
router.post('/', async (req, res) => {
  try {
    const review = new Review(req.body);
    await review.save();
    res.status(201).send(review);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET all reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find();
    res.status(200).send(reviews);
  } catch (err) {
    res.status(500).send(err);
  }
});

// GET a specific review by ID
router.get('/:id', async (req, res) => {
  try {
    const review = await Review.findById(req.params.id).populate('movie');
    if (!review) {
      return res.status(404).send();
    }
    res.status(200).send(review);
  } catch (err) {
    res.status(500).send(err);
  }
});

// UPDATE a review by ID
router.put('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!review) {
      return res.status(404).send();
    }
    res.status(200).send(review);
  } catch (err) {
    res.status(500).send(err);
  }
});

// DELETE a review by ID
router.delete('/:id', async (req, res) => {
  try {
    const review = await Review.findByIdAndDelete(req.params.id);
    if (!review) {
      return res.status(404).send();
    }
    res.status(200).send(review);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
