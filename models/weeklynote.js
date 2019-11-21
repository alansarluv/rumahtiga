const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const weeklynoteSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  kidName: {
    type: String,
    required: true
  },
  monthYear: {
    type: String,
    required: true
  },
  notes: {
    type: Array,
    required: true
  }
})

module.exports = mongoose.model('Weeklynote', weeklynoteSchema);

