const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  title: { type: String, required: true },

  content: { type: String, required: true },

  rating: { type: Number, required: true, min: 1, max: 5 },

  movie: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie',
  }
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
