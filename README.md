# **Flying Teapot Shop – Backend**

Backend for the **Flying Teapot Shop**, an online tea store built as part of a Full-Stack Web Development course. This repository contains the backend portion of the project, developed using **Node.js**, **Express.js**, and **MongoDB**.

---

## **Features**
- **User authentication** with **JWT** (JSON Web Tokens).
- **Role-based access control**:
  - Admins can manage **products**, **categories**, and **users**.
  - Users can manage their **profiles**, **favorites**, and **shopping cart**.
- **RESTful API** for seamless interaction with the frontend.
- **Image upload** and storage.
- **Data validation** using Joi.
- **Error handling** with detailed logs.
- **Initial seeding** for default admin account and example data.

---

## **Technologies Used**
- **Runtime Environment**: Node.js
- **Web Framework**: Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT
- **Validation**: Joi
- **Logging**: Morgan

---

## **Installation and Setup**

1. **Clone the repository:**

   git clone https://github.com/EvgeniyaItkina/FinalProjectServer.git
   cd FinalProjectServer


2. **Install dependencies:**

npm install

3. **Create a .env file in the root directory with the following variables:**

NODE_ENV = "production" <br>
PORT=2024 <br>
JWT_SECRET="d3v3l0pm3nt4c2e2" <br>
MONGO_DB_URL="mongodb://127.0.0.1:27017/tea-shop" # for local <br>
ATLAS_URL="mongodb+srv://tea-shop:1q2w3e4r5t6y@cluster0.ectfa.mongodb.net/" <br>
ADMIN_EMAIL="admin@admin.com" <br>
ADMIN_PASSWORD="admin343443" <br>

4. **Run the development server:**

npm run dev

## API Endpoints

### Authentication:

POST /api/auth/register - Register a new user.<br>
POST /api/auth/login - User login.<br>

### User Management:

GET /api/users - Get all users (admin only).<br>
DELETE /api/users/:id - Delete a user (admin only).<br>

### Product Management:

GET /api/products - Get all products.<br>
POST /api/products - Add a new product (admin only).<br>
PUT /api/products/:id - Update a product (admin only).<br>
DELETE /api/products/:id - Delete a product (admin only).<br>

### Categories:

GET /api/categories - Get all categories.<br>

## About the Full Project

This is the backend part of the Flying Teapot Shop project, which includes both frontend and backend development. <br>
To see the full project, visit the repository: [Tea-shop-project](https://github.com/EvgeniyaItkina/FinalProjectTeaShop-React-Node-MongoDB-TS.)
