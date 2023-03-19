const mongoose = require('mongoose');

const castSchema = new mongoose.Schema({
  name: { type: String, required: true },

  age: { type: Number },

  bio: { type: String },

  movies: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Movie'
  }]
  
});

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;
