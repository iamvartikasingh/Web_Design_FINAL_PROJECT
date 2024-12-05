const mongoose = require("mongoose");

const threadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Linking the user who created the thread
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Thread = mongoose.model("Thread", threadSchema);

module.exports = Thread;