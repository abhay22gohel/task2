const express = require("express");
const { getBooks } = require("../controllers/bookControllers");
const router = express.Router();

router.get("/books", getBooks);

module.exports = router;
