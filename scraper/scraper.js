const axios = require("axios");
const Book = require("../models/bookModal");

const scrapeTrendingBooks = async () => {
  try {
    const response = await axios.get("https://openlibrary.org/trending/daily");
    const books = response.data.works || []; // Assuming books are under response.data.works

    const updatedBooks = books.map((bookData) => {
      const title = bookData.title;
      const id = bookData.key.split("/").pop();

      return { title, key:id };
    });

    for (const book of updatedBooks) {
      await Book.findOneAndUpdate({ key: book.key }, book, { upsert: true });
    }
  } catch (error) {
    console.error("Error scraping trending books:", error);
  }
};

module.exports = scrapeTrendingBooks;
