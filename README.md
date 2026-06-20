# Christopher Jordan — CV / Profile Landing Page

A polished, single-page personal portfolio website for **Christopher Jordan Timothy Payangan**, a Hybrid QA Engineer specializing in Fintech & OpenAPI Banking. The site presents his CV in an interactive, recruiter-friendly format with **three switchable visual themes**, a **functional contact form**, and a **downloadable CV (PDF)**.

> 🚀 This project was built with the help of [**Emergent**](https://emergent.sh) — an AI-powered full-stack app builder.

---

## ✨ Features

- **Single-page CV layout** — Hero, About, Skills, Experience timeline, Education & Certifications, Contact, and Footer.
- **3 switchable themes** (constrained to a blue / black / white palette):
  - 🌞 **Modern Minimal** — clean, lots of whitespace
  - 🌙 **Bold & Dark** — dramatic, high-contrast terminal aesthetic
  - 💼 **Professional Corporate** — polished, classic
  - Theme preference is **persisted** in `localStorage`.
- **Functional contact form** — submissions are stored in MongoDB via the backend API, with success/error toasts and client-side validation.
- **Download CV (PDF)** buttons in the header, hero, and footer.
- **LinkedIn & GitHub** quick links in the Contact section and footer.
- **Smooth animations** with Framer Motion and responsive design across devices.

---

## 🛠️ Tech Stack

| Layer      | Technology |
|------------|------------|
| Frontend   | React 19 (CRA + CRACO), Tailwind CSS, Framer Motion, lucide-react, sonner |
| Backend    | FastAPI (Python), Motor (async MongoDB driver), Pydantic |
| Database   | MongoDB |
| Tooling    | Yarn, Supervisor, Uvicorn |

---

## 📁 Project Structure

```
/app
├── backend/
│   ├── server.py            # FastAPI app + /api/contact endpoints
│   ├── requirements.txt
│   └── .env                 # MONGO_URL, DB_NAME, CORS_ORIGINS
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── data/cv.js        # All CV content (single source of truth)
│   │   ├── context/ThemeContext.jsx
│   │   ├── pages/Portfolio.jsx
│   │   └── components/
│   │       ├── ui/           # shadcn/ui components
│   │       └── portfolio/    # Header, Hero, About, Skills, Experience, Education, Contact, Footer
│   ├── package.json
│   └── .env                  # REACT_APP_BACKEND_URL
└── README.md
```

---

## 🔌 API Endpoints

All backend routes are prefixed with `/api`.

| Method | Endpoint        | Description                          |
|--------|-----------------|--------------------------------------|
| GET    | `/api/`         | Health check                         |
| POST   | `/api/contact`  | Submit a contact message             |
| GET    | `/api/contact`  | List submitted messages (newest first) |

**Contact payload:**
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Hello, I'd love to connect!"
}
```

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js + Yarn
- Python 3.11+
- MongoDB running locally

### Environment Variables

**`backend/.env`**
```
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
```

**`frontend/.env`**
```
REACT_APP_BACKEND_URL=<your-backend-url>
```

### Backend
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001 --reload
```

### Frontend
```bash
cd frontend
yarn install
yarn start
```

The frontend runs on port `3000` and the backend on port `8001`. The frontend talks to the backend through `REACT_APP_BACKEND_URL`.

---

## ✏️ Updating CV Content

All resume content lives in a single file: **`frontend/src/data/cv.js`**.
Edit the `CV` object (name, title, summary, stats, skillGroups, experience, education, links, `cvUrl`) and the UI updates automatically — no component changes required.

---

## 🙏 Acknowledgements

This project was designed and developed with the assistance of **[Emergent](https://emergent.sh)**, an agentic AI platform for building full-stack applications.

---

## 📄 License

Personal portfolio project. © Christopher Jordan Timothy Payangan.
