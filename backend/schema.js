const mongoose = require('mongoose');

const students = new mongoose.Schema({
  first_name: { type: String, trim: true },
  last_name: { type: String, trim: true },
  email: { type: String, trim: true },
  mobile: { type: String, trim: true },
});
module.exports = mongoose.model('modeldata', students);
