# Book Review Platform API

This API provides endpoints to manage book reviews, authenticate users, perform web scraping of book data, and schedule updates.

## Features

1. **User Authentication and Authorization**
   - Users can register and login securely using JWT authentication.
   - Endpoints are protected to ensure only authenticated users can access them.

2. **Review Management API**
   - **Create a Review**: Allows users to add reviews for books.
     - Endpoint: `POST /reviews`
     - Example Request Body:
       ```json
       { "book_id": "OL12345M", "rating": 5, "comment": "Great book!" }
       ```
   - **Get All Reviews**: Retrieves all reviews with pagination.
     - Endpoint: `GET /reviews?page=1&size=10`
   - **Get a Single Review**: Retrieves details of a specific review.
     - Endpoint: `GET /reviews/{review_id}`
   - **Update a Review**: Allows users to update their reviews.
     - Endpoint: `PUT /reviews/{review_id}`
     - Example Request Body:
       ```json
       { "rating": 4, "comment": "Updated comment" }
       ```
   - **Delete a Review**: Deletes a review.
     - Endpoint: `DELETE /reviews/{review_id}`

3. **Web Scraping**
   - Implements a web scraper to fetch book data from Open Library's trending books.
   - Stores scraped data in the database and updates existing entries.

4. **Scheduler**
   - Scheduled task to run the web scraper periodically (e.g., daily) to keep book data updated.

## API Documentation

For detailed API documentation and usage examples, refer to [API Documentation](https://documenter.getpostman.com/view/27768277/2sA3dvjC6d).

## Deployment

The API is deployed and accessible online at [Book Review Platform](https://bookreview-mu.vercel.app/).

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- JWT (JSON Web Tokens) for authentication
- Web scraping tools (e.g., Cheerio for scraping)

## Getting Started

To run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies: `npm install`.
3. Set up environment variables (e.g., database connection string, JWT secret).
4. Run the server: `npm start`.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
