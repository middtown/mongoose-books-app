var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: {
  	//this connects our book model author section to our author model
  	type: Schema.Types.ObjectId,
  	ref: "Author",
  },
  image: String,
  releaseDate: String
});

var Book = mongoose.model('Book', BookSchema);

module.exports = Book;
