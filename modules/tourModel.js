const mongoose = require('mongoose');
const tour = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, 'Film nomini berish majburiy'],
  },
  year: {
    type: Number,
  },
  cast: [String],
  genres: [String],
});

const TourModel = mongoose.model('movies', tour);

module.exports = TourModel;
