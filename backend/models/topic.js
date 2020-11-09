const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Topic = new Schema({
  title: {
    type: String
  }
});

module.exports = mongoose.model('Topic', Topic)

