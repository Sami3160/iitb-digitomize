# iitb-digitomize

A full-stack MERN web application powered by **Vite (React)** on the frontend and **Node.js + Express + MongoDB** on the backend.
Built for speed, scalability, and clarity.

---

## 🚀 Tech Stack

**Frontend**

* React + Vite
* React Router
* Axios
* TailwindCSS / CSS Modules

**Backend**

* Node.js
* Express.js
* MongoDB + Mongoose

---

## 📁 Folder Structure

```
iitb-digitomize/
│
├── frontend/             # Vite + React app
│   ├── src/
│   └── vite.config.js
│
├── backend/              # Express + Node backend
│   ├── index.js
│   ├── routes/
│   ├── models/
│   └── controllers/
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/iitb-digitomize.git
cd iitb-digitomize
```

### 2️⃣ Install dependencies

* **Backend**

  ```bash
  cd backend
  npm install
  ```

* **Frontend**

  ```bash
  cd ../frontend
  npm install
  ```

---

## 🔑 Environment Variables

Inside the **backend/** folder, create a `.env` file:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the Project

### Run backend

```bash
cd backend
npm run dev
```

(using `nodemon` or a dev script you define)

### Run frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

Frontend → [http://localhost:5173](http://localhost:5173)
Backend → [http://localhost:5000](http://localhost:5000)

---

## 🌐 Connecting Frontend & Backend

In your frontend code (e.g., Axios):

```js
const API = axios.create({ baseURL: 'http://localhost:5000/api' });
```

Enable **CORS** in the backend:

```js
import cors from 'cors';
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
```

---

## 🧱 Build for Production

```bash
cd frontend
npm run build
```

Then serve the build via Express in `backend/index.js`:

```js
import path from 'path';
app.use(express.static('../frontend/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../frontend/dist', 'index.html'));
```
