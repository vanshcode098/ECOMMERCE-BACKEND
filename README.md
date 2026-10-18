# ShopSphere — Ecommerce Backend API

A RESTful ecommerce backend built with **Node.js, Express.js, and MongoDB**. ShopSphere is a learning-focused backend project designed to build a strong foundation in backend development, authentication, database management, API security, and scalable application architecture.

The project is being developed step by step, following a clean, maintainable folder structure and practical API testing.

## 🚀 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Password Security:** bcrypt
- **Validation:** Zod
- **Environment Variables:** dotenv
- **Cookie Handling:** cookie-parser
- **Development:** Nodemon
- **API Testing:** Postman

## ✨ Features

### Implemented

- Express server setup and health-check endpoint
- MongoDB connection using Mongoose
- Clean separation of routes, controllers, services, models, and middleware
- Centralized error handling with a custom `AppError` class
- Standardized API response utility
- User registration with password hashing using bcrypt
- Login with password verification
- JWT access-token generation
- Authentication middleware for protected routes
- Protected user profile endpoint
- Refresh-token generation and database-backed session storage
- Refresh-token hashing before database storage
- Refresh-token validation and rotation logic in the service layer
- Input validation using Zod

### In Progress

- Refresh-token endpoint integration and Postman testing
- Logout and session revocation
- Role-based authorization
- Resource ownership checks
- Additional authentication and security tests

### Planned

- Product management
- Product categories and inventory
- Shopping cart
- Order management
- Payment integration
- Search, filtering, sorting, and pagination
- Automated testing
- Production deployment and further security improvements

*The planned features are not yet implemented and will be added as development progresses.*

## 📁 Project Structure

```text
src/
├── config/
│   └── db.js
├── controllers/
│   └── user.controller.js
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── validate.js
├── models/
│   ├── user.model.js
│   └── session.model.js
├── routes/
│   └── user.routes.js
├── services/
│   └── user.service.js
├── utils/
│   ├── AppError.js
│   ├── apiResponse.js
│   ├── jwt.js
│   └── password.js
├── validators/
│   └── user.validator.js
├── app.js
└── server.js
```

This structure follows a layered architecture:

- **Routes:** Define API endpoints and middleware.
- **Controllers:** Handle HTTP requests and responses.
- **Services:** Contain business logic and database operations.
- **Models:** Define MongoDB document structures.
- **Middleware:** Handle authentication, validation, and errors.
- **Validators:** Validate incoming request data.
- **Utils:** Provide reusable helpers such as password hashing, JWT operations, and API responses.
- **Config:** Handle application configuration and database connectivity.

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)
- [Postman](https://www.postman.com/) for API testing

### 1. Clone the repository

```bash
git clone https://github.com/vanshcode098/ECOMMERCE-BACKEND.git
cd ECOMMERCE-BACKEND
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env` file in the project root:

```env
PORT=3000
MONGO_URL=your_mongodb_connection_string

JWT_ACCESS_SECRET=your_access_token_secret
JWT_ACCESS_EXPIRES_IN=15m

JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRES_IN=7d
```

Replace the MongoDB connection string with your actual database URI. Generate strong, unique secrets for both JWT tokens.

**Security:** Never commit your `.env` file or expose your database credentials or JWT secrets. Ensure `.env` is included in `.gitignore`.

### 4. Start the development server

```bash
npm run dev
```

For production-style execution:

```bash
npm start
```

The server runs on the port configured in your environment variables, defaulting to `3000`.

## 🔌 API Endpoints

Base URL:

```text
http://localhost:3000
```

### General

| Method | Endpoint  | Description      |
| ------ | --------- | ---------------- |
| GET    | `/`       | Welcome message  |
| GET    | `/health` | Check API health |

### Authentication and Users

| Method | Endpoint              | Description                               | Access    |
| ------ | --------------------- | ----------------------------------------- | --------- |
| POST   | `/api/users/register` | Register a user                           | Public    |
| POST   | `/api/users/login`    | Authenticate a user                       | Public    |
| GET    | `/api/users/profile`  | Retrieve the authenticated user's profile | Protected |

The refresh-token service is implemented, but its route integration and testing are still in progress.

*Confirm the endpoint paths against `src/routes/user.routes.js` if your route names differ.*

## 🧪 Testing with Postman

### Register a user

**POST** `/api/users/register`

Example request:

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "StrongPassword123"
}
```

### Login

**POST** `/api/users/login`

Example request:

```json
{
  "email": "rahul@example.com",
  "password": "StrongPassword123"
}
```

A successful login returns user information along with authentication tokens.

### Access the protected profile

**GET** `/api/users/profile`

In Postman, open **Authorization**, select **Bearer Token**, and provide the access token returned by login.

The authentication middleware verifies the token and attaches the authenticated user's ID and role to `req.user`.

## 🔐 Authentication Design

ShopSphere currently uses JWT-based authentication with password hashing and database-backed refresh sessions.

### Access-token flow

```text
Login
  ↓
Verify email and password
  ↓
Generate access token
  ↓
Send token to client
  ↓
Authorization: Bearer <access_token>
  ↓
Authentication middleware
  ↓
Verify JWT → req.user → Protected route
```

### Refresh-token and session design

- Refresh tokens are signed using a separate JWT secret.
- Each refresh session is associated with a user and session ID.
- The database stores a SHA-256 hash of the refresh token rather than the raw token.
- Refresh-token rotation replaces the stored hash when a valid token is refreshed.
- Session expiry and revocation fields support session lifecycle management.

Logout, full session revocation behavior, and further security testing remain part of the authentication roadmap.

## 🛡️ Error Handling and Validation

The project uses a centralized error-handling approach to keep controllers clean and API errors consistent.

- `AppError` represents application errors with HTTP status codes.
- `errorHandler` processes errors centrally.
- Zod schemas validate request data.
- Passwords are hashed before being stored.
- Password fields are excluded from normal user queries and responses.

## 🗺️ Development Roadmap

- [x] Phase 1 — Project foundation and database setup
- [x] Phase 2 — Clean architecture and centralized error handling
- [x] Phase 3 — Core registration, login, JWT authentication, and refresh-session service logic
- [x] Complete refresh-token endpoint and rotation testing
- [x] Complete logout and session revocation
- [x] Implement role-based authorization and ownership checks
- [x] Phase 4 — Product and inventory management
- [x] Phase 5 — Shopping cart
- [x] Phase 6 — Orders and checkout
- [x] Phase 7 — Payment integration
- [x] Phase 8 — Advanced querying, testing, and deployment

*The roadmap may evolve as the project develops.*

## 🎯 Project Goals

This project aims to develop practical skills in:

- REST API design
- Node.js and Express.js
- MongoDB data modeling
- Authentication and authorization
- Middleware and request lifecycle
- Input validation and error handling
- Secure session management
- Clean architecture and separation of concerns
- Building and testing production-oriented backend features

## 👨‍💻 Author

**Vansh**

GitHub: [@vanshcode098](https://github.com/vanshcode098)

---

If you find this project useful, consider giving the repository a ⭐.
