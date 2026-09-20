# MERN Task Manager

A full-stack Task Management application built using the MERN stack. 
The application allows users to register, log in securely, and manage their personal tasks with complete CRUD functionality.

## 🚀 Features

- User registration and login
- JWT-based authentication
- Password hashing using bcrypt
- Create tasks
- View personal tasks
- View a task by ID
- Update tasks
- Delete tasks
- Mark tasks as completed or pending
- User-specific task management
- Request logging middleware
- Input validation middleware
- MongoDB database integration
- RESTful API architecture
- React frontend with Axios API integration
- Environment-based configuration
- CORS support

## 🛠️ Technologies Used

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Axios
- Vite

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- dotenv
- CORS

### Development Tools

- VS Code
- Postman
- MongoDB Compass
- Git
- GitHub

## 🏗️ Project Architecture

The backend follows a layered architecture:

```text
Client (React)
      ↓
Routes
      ↓
Middleware
      ↓
Controllers
      ↓
Services
      ↓
Models
      ↓
MongoDB
