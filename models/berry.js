var mongoose = require('mongoose');

var BerrySchema = new mongoose.Schema({
  category: String,
  title: String,
  author: String,
  tags: String,
  reference: String,
  imgurl: String,
  URL: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

var Berry = mongoose.model('Berry', BerrySchema);
module.exports = Berry;