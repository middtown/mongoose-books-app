var mongoose = require('mongoose');
  Schema = mongoose.Schema;

var AuthorSchema = new Schema({
  name: String,
  alive: Boolean,
  image: String
});


//create a model out of my author schmema and export for use in other locations
var Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;
