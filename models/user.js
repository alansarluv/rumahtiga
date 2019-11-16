const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  resetToken: String,
  resetTokenExpiration: Date,
  kids: [
    {
      name: String,
      gender: String,
      birthday: Date,
    }
  ],
});

module.exports = mongoose.model('User', userSchema);
