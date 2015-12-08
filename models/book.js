var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var Book = mongoose.model('Book', BookSchema);
module.exports = Book;