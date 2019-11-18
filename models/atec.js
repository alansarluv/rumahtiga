const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const atecSchema = new Schema({
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
  bicaraTotal: {
    type: Number,
    required: true
  },
  sosialTotal: {
    type: Number,
    required: true
  },
  sensorikTotal: {
    type: Number,
    required: true
  },
  umumTotal: {
    type: Number,
    required: true
  },
  bicara1: {
    type: String,
    required: true
  },
  bicara2: {
    type: String,
    required: true
  },
  bicara3: {
    type: String,
    required: true
  },
  bicara4: {
    type: String,
    required: true
  },
  bicara5: {
    type: String,
    required: true
  },
  bicara6: {
    type: String,
    required: true
  },
  bicara7: {
    type: String,
    required: true
  },
  bicara8: {
    type: String,
    required: true
  },
  bicara9: {
    type: String,
    required: true
  },
  bicara10: {
    type: String,
    required: true
  },
  bicara11: {
    type: String,
    required: true
  },
  bicara12: {
    type: String,
    required: true
  },
  bicara13: {
    type: String,
    required: true
  },
  bicara14: {
    type: String,
    required: true
  },
  sosial1: {
    type: String,
    required: true
  },
  sosial2: {
    type: String,
    required: true
  },
  sosial3: {
    type: String,
    required: true
  },
  sosial4: {
    type: String,
    required: true
  },
  sosial5: {
    type: String,
    required: true
  },
  sosial6: {
    type: String,
    required: true
  },
  sosial7: {
    type: String,
    required: true
  },
  sosial8: {
    type: String,
    required: true
  },
  sosial9: {
    type: String,
    required: true
  },
  sosial10: {
    type: String,
    required: true
  },
  sosial11: {
    type: String,
    required: true
  },
  sosial12: {
    type: String,
    required: true
  },
  sosial13: {
    type: String,
    required: true
  },
  sosial14: {
    type: String,
    required: true
  },
  sosial15: {
    type: String,
    required: true
  },
  sosial16: {
    type: String,
    required: true
  },
  sosial17: {
    type: String,
    required: true
  },
  sosial18: {
    type: String,
    required: true
  },
  sosial19: {
    type: String,
    required: true
  },
  sosial20: {
    type: String,
    required: true
  },
  sensorik1: {
    type: String,
    required: true
  },
  sensorik2: {
    type: String,
    required: true
  },
  sensorik3: {
    type: String,
    required: true
  },
  sensorik4: {
    type: String,
    required: true
  },
  sensorik5: {
    type: String,
    required: true
  },
  sensorik6: {
    type: String,
    required: true
  },
  sensorik7: {
    type: String,
    required: true
  },
  sensorik8: {
    type: String,
    required: true
  },
  sensorik9: {
    type: String,
    required: true
  },
  sensorik10: {
    type: String,
    required: true
  },
  sensorik11: {
    type: String,
    required: true
  },
  sensorik12: {
    type: String,
    required: true
  },
  sensorik13: {
    type: String,
    required: true
  },
  sensorik14: {
    type: String,
    required: true
  },
  sensorik15: {
    type: String,
    required: true
  },
  sensorik16: {
    type: String,
    required: true
  },
  sensorik17: {
    type: String,
    required: true
  },
  sensorik18: {
    type: String,
    required: true
  },
  umum1: {
    type: String,
    required: true
  },
  umum2: {
    type: String,
    required: true
  },
  umum3: {
    type: String,
    required: true
  },
  umum4: {
    type: String,
    required: true
  },
  umum5: {
    type: String,
    required: true
  },
  umum6: {
    type: String,
    required: true
  },
  umum7: {
    type: String,
    required: true
  },
  umum8: {
    type: String,
    required: true
  },
  umum9: {
    type: String,
    required: true
  },
  umum10: {
    type: String,
    required: true
  },
  umum11: {
    type: String,
    required: true
  },
  umum12: {
    type: String,
    required: true
  },
  umum13: {
    type: String,
    required: true
  },
  umum14: {
    type: String,
    required: true
  },
  umum15: {
    type: String,
    required: true
  },
  umum16: {
    type: String,
    required: true
  },
  umum17: {
    type: String,
    required: true
  },
  umum18: {
    type: String,
    required: true
  },
  umum19: {
    type: String,
    required: true
  },
  umum20: {
    type: String,
    required: true
  },
  umum21: {
    type: String,
    required: true
  },
  umum22: {
    type: String,
    required: true
  },
  umum23: {
    type: String,
    required: true
  },
  umum24: {
    type: String,
    required: true
  },
  umum25: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('Atec', atecSchema);

