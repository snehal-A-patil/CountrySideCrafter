const mongoose = require('mongoose');

const artisanSchema = new mongoose.Schema({
  name: String,
  bio: String,
  location: String,
  image: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Artisan', artisanSchema);
