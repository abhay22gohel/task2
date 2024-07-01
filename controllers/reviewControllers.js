const Review = require("../models/reviewModal");
const Book = require("../models/bookModal");

const asyncHandler = require("express-async-handler");

const createReview = asyncHandler(async (req, res) => {
  try {
    const book = await Book.find({ key: req.body.book_id });
    if (!book) return res.status(404).json({ message: "Book not found." });
    const review = new Review({ ...req.body, user_id: req.user._id });
    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: "Can not create Review." });
  }
});

const getReviews = asyncHandler(async (req, res) => {
  try {
    const { page = 1, size = 10 } = req.query;
    const reviews = await Review.find()
      .skip((page - 1) * size)
      .limit(parseInt(size));
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ message: "Can not get Reviews." });
  }
});

const getReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Can not this Reviews." });
  }
});

const updateReview = asyncHandler(async (req, res) => {
  try {
    const book = await Book.find({ key: req.body.book_id });
    if (!book) return res.status(404).json({ message: "Book not found." });
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    
    
    if (review.user_id != req.user._id)
      return res.status(403).json({ message: "Unauthorized" });

    review.rating = req.body.rating;
    review.comment = req.body.comment;
    await review.save();
    res.json(review);
  } catch (error) {
    res.status(500).json({ message: "Can not update Review." });
  }
});
const deleteReview = asyncHandler(async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: "Review not found" });
    if (review.user_id!== req.user._id)
      return res.status(403).json({ message: "Unauthorized" });

    await review.remove();
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: "Can not delete Review." });
  }
});

module.exports = {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
};
