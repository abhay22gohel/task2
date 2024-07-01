const cron = require("node-cron");
const scrapeTrendingBooks = require("./scraper/scraper");

cron.schedule("0 0 * * *", () => {
  console.log("Running scraper...");
  scrapeTrendingBooks();
});
