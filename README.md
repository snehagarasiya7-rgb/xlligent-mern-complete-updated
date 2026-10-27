# Xlligent Softwares – MERN Stack Website

Complete MERN stack project: **React (Vite) frontend** + **Node.js + Express + MongoDB backend**.

> Frontend code is **unchanged**. Backend is fully added and ready for contact form, job applications & reviews APIs.

---


## Frontend ↔ Backend Connection

Frontend forms are wired to the backend APIs:

| Form / Feature | API |
|----------------|-----|
| Contact form (`/contact`) | `POST /api/contact` |
| Career apply form (`/career`) | `POST /api/applications` |
| Google Reviews fallback | `GET /api/reviews` |

API base URL defaults to `http://localhost:5000`. Override with:

```bash
# project root .env
VITE_API_URL=http://localhost:5000
```

**Run both:**

```bash
# terminal 1 – backend
cd backend && npm install && npm run seed && npm run dev

# terminal 2 – frontend
npm install && npm run dev
```


## Project Structure

```
xlligent/
├── backend/                 # Node.js + Express + MongoDB
│   ├── src/
│   │   ├── config/db.js
│   │   ├── controllers/
│   │   ├── models/          # Contact, Application, Review
│   │   ├── routes/
│   │   ├── seed.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── public/
├── src/                     # React frontend (NO changes)
├── package.json
├── vite.config.js
└── README.md
```

---

## Prerequisites

- Node.js 18+
- MongoDB (local) **or** MongoDB Atlas (free cloud)

---

## 1. Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Edit .env if needed (MongoDB URI, PORT, FRONTEND_URL)
```

### Start MongoDB (local)

```bash
# macOS
brew services start mongodb-community

# Ubuntu
sudo systemctl start mongod

# Or use MongoDB Atlas free tier → put connection string in .env
```

### Seed Google Reviews into MongoDB

```bash
npm run seed
```

### Run Backend

```bash
npm run dev          # development (auto-restart)
# or
npm start
```

Backend runs at: **http://localhost:5000**

### API Endpoints

| Method | Endpoint              | Description                  |
|--------|-----------------------|------------------------------|
| GET    | `/`                   | API info                     |
| GET    | `/api/health`         | Health check                 |
| POST   | `/api/contact`        | Submit contact form          |
| GET    | `/api/contact`        | List all contact messages    |
| POST   | `/api/applications`   | Submit job application       |
| GET    | `/api/applications`   | List all applications        |
| GET    | `/api/reviews`        | Get all approved reviews     |
| POST   | `/api/reviews`        | Add a new review             |

#### Example – Contact Form

```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Rahul Sharma","email":"rahul@example.com","phone":"9876543210","message":"Need school management software demo"}'
```

#### Example – Job Application

```bash
curl -X POST http://localhost:5000/api/applications \
  -H "Content-Type: application/json" \
  -d '{"name":"Priya","email":"priya@example.com","phone":"9876543210","position":"React Developer","resumeFileName":"priya-resume.pdf"}'
```

---

## 2. Frontend Setup

```bash
# from project root
npm install
npm run dev
```

Frontend runs at: **http://localhost:5173**

> Note: Current frontend still uses `mailto:` for forms (as original). Backend APIs are ready.  
> To connect forms to backend later, change `handleSubmit` to `fetch("http://localhost:5000/api/contact", { method: "POST", ... })`.

---

## 3. Deploy (Recommended free stack)

### Backend → Render / Railway / Cyclic

1. Push code to GitHub
2. Create new Web Service on [Render](https://render.com)
3. Root Directory: `backend`
4. Build: `npm install`
5. Start: `npm start`
6. Add Environment Variables:
   - `MONGODB_URI` = your Atlas connection string
   - `NODE_ENV` = production
   - `FRONTEND_URL` = your frontend URL (Vercel)
   - `PORT` = 10000 (Render sets automatically)

### MongoDB → MongoDB Atlas (Free)

1. Create free cluster at [mongodb.com/atlas](https://www.mongodb.com/cloud/atlas)
2. Create database user + Network Access (0.0.0.0/0 for demo)
3. Copy connection string → put in Render env

### Frontend → Vercel / Netlify

```bash
npm run build
# Deploy `dist/` folder to Vercel
```

Or connect GitHub repo to Vercel → Framework: Vite.

---

## Environment Variables (Backend)

```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster0.xxxxx.mongodb.net/xlligent?retryWrites=true&w=majority
NODE_ENV=production
FRONTEND_URL=https://your-frontend.vercel.app
```

---

## Tech Stack

| Layer     | Technology              |
|-----------|-------------------------|
| Frontend  | React 18 + Vite + React Router |
| Backend   | Node.js + Express.js    |
| Database  | MongoDB (Mongoose ODM) |
| Security  | Helmet, CORS, Rate Limit|

---

## Interview Talking Points

1. **MERN** – MongoDB, Express, React, Node.js
2. Models: Contact, Application, Review with validation
3. RESTful APIs with proper status codes & error handling
4. Rate limiting + Helmet for security
5. Seed script for real Google reviews
6. Ready for production deployment (Atlas + Render + Vercel)
7. Frontend left untouched as requested

---

**Good luck with your interview!** 🚀
