const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  book_id: { type: String, required: true },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
});

module.exports = mongoose.model("Review", reviewSchema);
