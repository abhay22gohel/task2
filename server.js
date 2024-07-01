const dotenv = require("dotenv");
const colors = require("colors");
const express = require("express");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const bookRoutes = require("./routes/bookRoutes");

const scrapeTrendingBooks = require("./scraper/scraper");
require("./scheduler");

// creating server
const app = express();

// dot env file configuration
dotenv.config();

// connect to database function
connectDB();

// accepting data in JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello from server.");
});

// userRoutes
app.use("/user", userRoutes);
app.use("/reviews", reviewRoutes);
app.use("/books", bookRoutes);

// handling errors like not found and other erros
app.use(notFound);
app.use(errorHandler);

app.listen(process.env.PORT, async () => {
  try {
    // await scrapeTrendingBooks();
  } catch (error) {
    console.log(error);
  }
  console.log("Server is Started.".bgGreen);
});
