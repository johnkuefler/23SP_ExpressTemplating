const mongoose = require('mongoose');

const { Schema } = mongoose;

const birdSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
});

const Bird = mongoose.model('birds', birdSchema);

module.exports = Bird;
