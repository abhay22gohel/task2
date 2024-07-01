const express = require("express");
const { getBooks } = require("../controllers/bookControllers");
const { protect } = require("../middlewares/authorization");

const router = express.Router();

router.get("/", protect, getBooks);

module.exports = router;
