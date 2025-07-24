# MongoDB CRUD API

A RESTful API built with Node.js, Express.js, and MongoDB that provides complete CRUD operations for products and user authentication.

## Features

- **Product Management**: Create, Read, Update, and Delete products
- **User Authentication**: Register, Login, and Logout functionality
- **JWT Authentication**: Secure routes with JSON Web Tokens
- **Rate Limiting**: Prevents brute force attacks on login endpoints
- **Password Hashing**: Securely store user passwords with bcrypt

## API Endpoints

### Product Routes

- `POST /api/p/product` - Create a new product
- `GET /api/p/products` - Get all products
- `GET /api/p/product/:id` - Get a product by ID
- `PUT /api/p/product/:id` - Update a product
- `DELETE /api/p/product/:id` - Delete a product

### User Routes

- `POST /api/u/user/register` - Register a new user
- `POST /api/u/user/login` - Login a user
- `POST /api/u/user/logout` - Logout a user
- `GET /api/u/users` - Get all users
- `GET /api/u/user/d` - Get user dashboard (requires authentication)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB account

### Installation

1. Clone the repository:
   ```
   https://github.com/irvinosazee/mongodb-express-CRUD-api.git
   cd mongodb-crud-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   USERNAME=your_mongodb_username
   MONGO_PASSWORD=your_mongodb_password
   JWT_SECRET=your_jwt_secret
   URI=your_mongodb_connection_string
   ```

4. Start the development server:
   ```
   npm run serve
   ```

## Project Structure

```
mongodb-CRUD-api/
├── controllers/
│   └── product.controller.js
├── middlewares/
│   ├── auth.js
│   └── limiter.js
├── models/
│   ├── product.model.js
│   └── user.model.js
├── routes/
│   ├── product.route.js
│   └── user.route.js
├── tests/
│   ├── test.dev.js
│   └── test.js
├── .env
├── .gitignore
├── db.js
├── package.json
├── Readme.md
├── server.js
└── vercel.json
```

## Deployment

This project is configured for deployment on Vercel using the included `vercel.json` configuration file.

## Security Features

- Password hashing using bcrypt
- JWT authentication for protected routes
- Rate limiting to prevent brute force attacks
- Environment variables for sensitive information

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- express-rate-limit

## License

This project is licensed under the ISC License.

## Author

Irvin Osazee