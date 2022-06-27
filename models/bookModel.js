const mongoose = require('mongoose');

const bookSchema = mongoose.Schema(
  {
    title: String,
    writer: String,
    publisher: String,
    year: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Book', bookSchema);
