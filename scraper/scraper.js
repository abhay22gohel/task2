const axios = require("axios");
const cheerio = require("cheerio");
const Book = require("../models/bookModal");

const scrapeTrendingBooks = async () => {
  const response = await axios.get("https://openlibrary.org/trending/daily");
  const $ = cheerio.load(response.data);
  
  const books = [];

  $("a.cover").each((index, element) => {
    const title = $(element).attr("title");

    const id = $(element).attr("href").split("/").pop();

    books.push({ title, key: id });
  });

  for (const book of books) {
    await Book.findOneAndUpdate({ id: book.id }, book, { upsert: true });
  }
};

module.exports = scrapeTrendingBooks;
