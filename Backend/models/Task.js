// backend/models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 300
  },
  completed: {
    type: Boolean,
    default: false
  }
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
