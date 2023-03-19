const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Import your models here
const Movie = require('./models/movies');
const Review = require('./models/reviews');
const Country = require('./models/countries');
const Cast = require('./models/casts');

// Define your routes here
const movieRoutes = require('./routes/movie');
const reviewRoutes = require('./routes/review');
const countryRoutes = require('./routes/country');
const castRoutes = require('./routes/cast');

app.use('/api/movies', movieRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/countries', countryRoutes);
app.use('/api/casts', castRoutes);

// Connect to your MongoDB Atlas cluster
const dbURI = 'mongodb+srv://DilsharaHerath:wyeoDUEMuEXHhGMB@movieapi.uynmgqx.mongodb.net/MovieDatabase?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch((error) => console.log(error));

// Start the server
const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
