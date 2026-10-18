# ShopSphere — Ecommerce Backend API

ShopSphere is a RESTful ecommerce backend built with **Node.js, Express.js, and MongoDB**. The project focuses on building backend development skills through practical implementation, clean architecture, authentication, and secure session management.

## 🚀 Tech Stack

- Node.js
- Express.js
- MongoDB and Mongoose
- JWT (JSON Web Tokens)
- bcrypt
- Zod
- dotenv
- cookie-parser
- Postman
- Nodemon

## ✨ Features Implemented

- Express server setup and health-check endpoint
- MongoDB database connection
- Clean, layered backend architecture
- Centralized error handling using a custom `AppError` class
- Standardized API response utility
- Request validation using Zod
- User registration with password hashing using bcrypt
- User login with password verification
- JWT access-token generation
- Protected routes using authentication middleware
- Authenticated user profile endpoint
- Refresh-token generation
- Database-backed refresh sessions
- Refresh-token hashing and session expiry management
- Refresh-token validation and rotation logic in the service layer

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

## ⚙️ Getting Started

### Prerequisites

- Node.js
- MongoDB
- Postman

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

Replace the placeholder values with your actual configuration. Keep `.env` out of version control.

### 4. Run the server

Development mode:

```bash
npm run dev
```

Normal start:

```bash
npm start
```

## 🔌 API Endpoints

Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/health` | API health check |
| POST | `/api/users/register` | Register a new user |
| POST | `/api/users/login` | Log in a user |
| GET | `/api/users/profile` | Access the authenticated user's profile |

Protected routes require a valid access token in the `Authorization` header:

```text
Authorization: Bearer <access_token>
```

## 🔐 Authentication Flow

```text
User Registration
       ↓
Password Hashing (bcrypt)
       ↓
User Login
       ↓
Password Verification
       ↓
JWT Access Token + Refresh Token
       ↓
Protected Route
       ↓
JWT Verification Middleware
       ↓
Authenticated User
```

Refresh sessions are stored in MongoDB. The refresh-token service includes validation and rotation logic to help prevent reuse of an old refresh token.

## 🏗️ Architecture

ShopSphere follows a layered architecture to keep the code organized and maintainable:

- **Routes:** Define API endpoints.
- **Controllers:** Handle HTTP requests and responses.
- **Services:** Manage business logic.
- **Models:** Define database schemas.
- **Middleware:** Handle authentication, validation, and errors.
- **Validators:** Validate incoming data.
- **Utils:** Provide reusable helpers.
- **Config:** Manage database configuration.

## 🛠️ Current Development Status

- [x] Project foundation and database connection
- [x] Clean architecture and centralized error handling
- [x] User registration and login
- [x] Password hashing and verification
- [x] JWT access-token authentication
- [x] Protected user profile
- [x] Refresh-token and database session service logic
- [ ] Complete refresh endpoint integration and testing
- [ ] Logout and session revocation
- [ ] Role-based authorization and ownership checks

## 👨‍💻 Author

**Vansh**

GitHub: [@vanshcode098](https://github.com/vanshcode098)

---

*ShopSphere is actively being developed, with new backend features added incrementally.*

