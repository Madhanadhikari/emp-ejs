
# 🧾 Employee Management System

A simple web-based employee management system using Node.js, Express, MongoDB, and EJS templates. Users can **register**, **log in**, **add**, **view**, **edit**, and **delete** employee details. Passwords are securely hashed using `bcrypt`.

---

## ✨ Features

- 🔐 User Registration & Login (with session management)
- ➕ Add new employees
- 📄 View employee list in a responsive table
- ✏️ Edit employee details
- 🗑️ Delete employees
- 🧼 Logout and clear session

---

## 🧰 Tech Stack

- **Backend**: Node.js, Express
- **Frontend**: HTML, Bootstrap 5, EJS
- **Database**: MongoDB + Mongoose
- **Auth & Security**: `express-session`, `bcryptjs`

---

## ⚙️ Setup Instructions

1. **Clone the project**:
   ```bash
   git clone https://github.com/your-username/employee-management.git
   cd employee-management
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start MongoDB** (Make sure it's running on your system or use MongoDB Atlas)

4. **Run the project**:
   ```bash
   node app.js
   ```
   Or if you're using nodemon:
   ```bash
   nodemon app.js
   ```

5. **Open your browser**:
   ```
   http://localhost:3000
   ```

---

## 📦 Dependencies

```json
"dependencies": {
  "bcryptjs": "^2.4.3",
  "express": "^4.18.2",
  "express-session": "^1.17.3",
  "mongoose": "^7.0.0",
  "ejs": "^3.1.8"
}
```

---

## 🙋‍♂️ Author

**Madhan Adhikari**  
GitHub: http://github.com/Madhanadhikari
