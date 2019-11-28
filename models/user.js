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
  role: String,
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

userSchema.methods.addKid = function(kid) {
  const updatedKids = [...this.kids];
  updatedKids.push({
    name: kid.name,
    gender: kid.gender,
    birthday: kid.birthday
  });
  this.kids = updatedKids;
  return this.save();
}

module.exports = mongoose.model('User', userSchema);
