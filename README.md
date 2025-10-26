# 📰 Week4 MERN Blog Application  

## 📖 Project Overview  
This is a **full-stack MERN (MongoDB, Express.js, React.js, Node.js)** blog application that allows users to **create, read, update, and delete blog posts**, register and log in, and interact through comments, search, and filtering.  

The project demonstrates full **integration between the frontend and backend** with database operations, API communication, and state management. The user interface is responsive and built using React and Tailwind CSS for a clean and modern experience.  

---

## ⚙️ Setup Instructions  

### 🧩 Prerequisites  
- Node.js installed (v18+ recommended)  
- MongoDB Atlas account  
- Termux or any local terminal  
- Acode or VS Code for editing  

---

### 🧠 Backend Setup (Server)
```bash
# Navigate to the server folder
cd week4-mern-blog/server

# Install dependencies
npm install

# Create a .env file and add:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=mySecretKey123

# Start the backend
node server.js
###Frontend Setup(Client)
# Navigate to client folder
cd week4-mern-blog/client

# Install dependencies
npm install

# Start the frontend
npm run dev
## 🌟 Features Implemented & 🧰 Technologies Used  

### 💻 Core Features  
- 🧠 **User Authentication** — Secure login & registration using JWT and bcrypt  
- 📝 **CRUD Operations** — Users can create, read, update, and delete blog posts  
- 💬 **Comment System** — Add, view, and manage comments under posts  
- 🔐 **Protected Routes** — Only authenticated users can create, edit, or delete posts  
- 🔍 **Search & Pagination** — Easily find posts and navigate through multiple pages  
- 🖼️ **Image Upload Support** — Upload and display blog images dynamically  
- 🧭 **Routing System** — Implemented using React Router DOM  
- ⚙️ **State Management** — Managed with React hooks (useState, useEffect, useContext)  
- 📱 **Responsive Design** — Fully optimized for mobile and desktop views  
- 🌍 **RESTful API Integration** — Smooth frontend–backend communication via Axios  
- 🧩 **Environment Variables** — Secure setup using dotenv for API keys and secrets  

---

### ⚙️ Technologies Used  

#### 🖥️ Frontend  
- **React.js** — Component-based frontend framework  
- **Tailwind CSS** — Modern utility-first CSS for styling  
- **React Router DOM** — Page navigation and route protection  
- **Axios** — For handling API requests  
- **Vite** — Fast and optimized frontend build tool  

#### 🧠 Backend  
- **Node.js** — JavaScript runtime for building scalable backend  
- **Express.js** — Lightweight backend framework for RESTful APIs  
- **MongoDB Atlas** — Cloud database for data storage  
- **Mongoose** — ODM for modeling and managing MongoDB data  
- **Bcrypt.js** — Password encryption for user security  
- **JSON Web Tokens (JWT)** — Authentication and user session management  
- **CORS & Dotenv** — For cross-origin access and environment configuration  

---

> 💪 **In summary:**  
This MERN Blog combines modern frontend design (React + Tailwind) with a secure backend (Express + MongoDB). It supports full CRUD functionality, user authentication, comment interactions, and an engaging user interface for readers and creators alike.
Folder Structure
week4-mern-blog/
│
├── client/               # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── server/               # Express Backend
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
## 📸 Screenshots  

Here are some screenshots showing different parts of the application:  

### 🏠 Home Page  
![Home Page](./screenshots/homepage.png)  

### 🔐 Login Page  
![Login Page](./screenshots/login.png)  

### 🧍‍♀️ Register Page  
![Register Page](./screenshots/register.png)  

### 📝 Create Post Page  
![Create Post](./screenshots/createpost.png)  