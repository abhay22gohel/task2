const express = require("express");
const { protect } = require("../middlewares/authorization");
const {
  createReview,
  getReviews,
  getReview,
  updateReview,
  deleteReview,
} = require("../controllers/reviewControllers");
const router = express.Router();

router.post("/", protect, createReview);
router.get("/",protect, getReviews);
router.get("/:id",protect, getReview);
router.put("/:id", protect, updateReview);
router.delete("/:id", protect, deleteReview);

module.exports = router;
