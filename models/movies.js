const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  cast: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cast'
  }],
  director: { type: String, required: true },
  review: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }],
  country: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  }],
  plot: String,
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
