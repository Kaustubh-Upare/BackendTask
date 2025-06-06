# 🛡️ Authentication & Settings API

A **RESTful backend API** built using **Node.js**, **Express**, **MongoDB**, **JWT**, and **bcryptjs** to provide robust user authentication, profile management, and customizable user preferences.

---

## 🚀 Features

### 🔐 User Authentication
- `POST /api/register` – Register a new user (name, email, password)
- `POST /api/login` – Login user and return JWT token
- `GET /api/profile` – Get user profile (protected)

### 🎨 User Preferences
- `POST /api/preferences` – Save user preferences (theme & layout)
- `GET /api/preferences` – Fetch preferences (protected)

### 📝 Profile Management
- `PATCH /api/profile` – Update user name or email (protected)

### 📊 Bonus Endpoint
- `GET /api/dashboard-summary` – Return mock data (teams, projects, notifications)

---

## 🧰 Tech Stack

| Technology  | Description                            |
|-------------|----------------------------------------|
| **Node.js** | JavaScript runtime environment         |
| **Express** | Web framework for Node.js              |
| **MongoDB** | NoSQL document database                |
| **Mongoose**| Elegant MongoDB object modeling        |
| **JWT**     | Secure token-based authentication      |
| **bcryptjs**| Password hashing                       |
| **dotenv**  | Environment variable management        |

---

## 💻 Installation & Setup

Follow these steps to set up the project locally:

### 1. 📦 Clone the repository

```bash
git clone https://github.com/Kaustubh-Upare/BackendTask.git
cd BackendTask
2. 📥 Install dependencies
bash
Copy
Edit
npm install
3. ⚙️ Configure environment variables
Create a .env file in the root directory and add:

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
🔐 Replace your_mongodb_atlas_uri and your_jwt_secret_key with your actual credentials.

4. ▶️ Start the development server
bash
Copy
Edit
npm start
The server will start at:
🌐 http://localhost:3000

📂 Folder Structure
bash
Copy
Edit
📁 BackendTask
├── 📁 controller       # Request handlers
├── 📁 middleware       # JWT auth, input validation
├── 📁 models           # Mongoose schemas
├── 📁 routes           # Route definitions
├── 📁 utility          # MongoDB connection setup
├── .env               # Environment variables
├── app.js             # Main application entry
└── package.json       # Project metadata
