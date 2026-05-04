# 🇰🇭 Discover Cambodia — Tourism Web Application

> Year 2 Student Project — Full-Stack Web Development  
> Go · Gin · PostgreSQL · React · Tailwind CSS · Docker

A respectful, educational tourism guide covering Cambodia's **Dark History**, **Cultural Heritage**, and **Ecotourism** sites.

---

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Backend API Reference](#backend-api-reference)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

---

## Project Overview

This application helps travellers discover and plan visits to Cambodia's three major tourism categories:

| Type | Description | Sites |
|------|-------------|-------|
| 🕯️ **Dark History** | Khmer Rouge memorials, genocide museums | S-21, Choeung Ek, Anlong Veng, Landmine Museum |
| 🏛️ **Cultural Heritage** | UNESCO sites, temples, royal palaces | Angkor Wat, Royal Palace, Sambor Prei Kuk, Preah Vihear |
| 🌿 **Ecotourism** | Community forests, wildlife sanctuaries | Cardamom Mountains, Chi Phat, Keo Seima, Tonle Sap |

> **Note on Dark Tourism Sites:** These are memorial sites dedicated to the victims of the Khmer Rouge genocide (1975–1979). They must be visited with respect and sensitivity. This application treats them accordingly — not as attractions but as places of remembrance.

---

## Features

### Public
- Browse all tourism sites with filtering by type, province, and search
- Read detailed descriptions, historical context, opening hours, and visitor tips
- Read visitor reviews

### Registered Users
- Create an account and sign in
- Leave reviews (one per site)
- Plan visits with a date and status tracker (planned → visited / cancelled)

### Admin
- Create, update, and delete sites
- Moderate reviews
- View platform statistics

---

## Tech Stack

### Backend
| Layer | Technology |
|-------|-----------|
| Language | Go 1.22 |
| Framework | Gin |
| ORM | GORM |
| Database | PostgreSQL 16 |
| Auth | JWT (golang-jwt/jwt v5) |
| Password | bcrypt |
| Config | godotenv |

### Frontend
| Layer | Technology |
|-------|-----------|
| Framework | React 18 |
| Routing | React Router v6 |
| State | Zustand |
| Data fetching | TanStack Query |
| Styling | Tailwind CSS |
| HTTP client | Axios |
| Notifications | react-hot-toast |

### Infrastructure
| Tool | Purpose |
|------|---------|
| Docker + Compose | Containerisation |
| Nginx | Frontend static serving + reverse proxy |
| PostgreSQL 16 Alpine | Database |

---

## Architecture

The backend follows a strict **layered architecture**:

```
HTTP Request
     │
     ▼
┌────────────┐
│  Middleware │  JWT auth, CORS, logging
└─────┬──────┘
      │
      ▼
┌────────────┐
│  Handler   │  Bind request → call service → send response
└─────┬──────┘  (no business logic here)
      │
      ▼
┌────────────┐
│  Service   │  All business rules, validation, error types
└─────┬──────┘
      │
      ▼
┌────────────┐
│ Repository │  Database queries only (interfaces, GORM)
└─────┬──────┘
      │
      ▼
┌────────────┐
│  Database  │  PostgreSQL
└────────────┘
```

**Key design decisions:**
- `domain` package holds all entities and DTOs — imported everywhere, imports nothing
- `service` layer owns sentinel errors (`ErrNotFound`, `ErrForbidden`, etc.)
- Handlers never touch `*gorm.DB` — only service interfaces
- `response` package enforces a consistent JSON envelope across all endpoints
- `config` is loaded once at startup and injected — no global variables

---

## Getting Started

### Prerequisites
- [Go 1.22+](https://go.dev/dl/)
- [Node.js 20+](https://nodejs.org/)
- [PostgreSQL 16](https://www.postgresql.org/) or [Docker Desktop](https://www.docker.com/)

---

### Option A: Docker Compose (recommended)

```bash
# Clone the repo
git clone https://github.com/your-username/cambodia-tourism.git
cd cambodia-tourism

# Start everything
docker compose up --build

# App:     http://localhost:3000
# API:     http://localhost:8080/api/v1
# DB:      localhost:5432
```

---

### Option B: Local development

#### 1. Database

```bash
# Create the database
psql -U postgres -c "CREATE DATABASE cambodia_tourism;"
```

#### 2. Backend

```bash
cd backend

# Copy env file
cp .env.example .env
# Edit .env with your DB password

# Download dependencies
go mod tidy

# Run (auto-migrates and seeds on first start)
go run ./cmd/server
```

#### 3. Frontend

```bash
cd frontend
npm install
npm run dev
# http://localhost:5173
```

---

### Default Admin Account

On first run, create an admin user via the API, then update the role directly:

```bash
# Register
curl -X POST http://localhost:8080/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Admin","email":"admin@cambodia.com","password":"admin123"}'

# Promote to admin (run once in psql)
psql -U postgres -d cambodia_tourism \
  -c "UPDATE users SET role='admin' WHERE email='admin@cambodia.com';"
```

---

## Backend API Reference

All responses follow this envelope:

```json
{
  "success": true,
  "data": { ... },
  "meta": { "total": 12, "page": 1, "limit": 12, "pages": 1 },
  "error": null
}
```

### Auth

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/v1/auth/register` | — | Register new user |
| POST | `/api/v1/auth/login` | — | Login, receive JWT |
| GET | `/api/v1/auth/me` | ✅ User | Get current user |

### Sites

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| GET | `/api/v1/sites` | — | List sites (filterable) |
| GET | `/api/v1/sites/:slug` | — | Get site details + reviews |
| POST | `/api/v1/admin/sites` | 🔑 Admin | Create site |
| PUT | `/api/v1/admin/sites/:id` | 🔑 Admin | Update site |
| DELETE | `/api/v1/admin/sites/:id` | 🔑 Admin | Delete site |

**Site list query params:**

| Param | Type | Example |
|-------|------|---------|
| `search` | string | `?search=angkor` |
| `type` | `dark\|cultural\|eco` | `?type=eco` |
| `province` | string | `?province=Siem Reap` |
| `featured` | bool | `?featured=true` |
| `sort` | `created_at\|name\|entry_fee` | `?sort=name` |
| `order` | `asc\|desc` | `?order=asc` |
| `page` | int | `?page=2` |
| `limit` | int (max 50) | `?limit=6` |

### Reviews

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/v1/reviews` | ✅ User | Create review (one per site) |
| DELETE | `/api/v1/admin/reviews/:id` | 🔑 Admin | Delete review |

### Visits

| Method | Path | Auth | Description |
|--------|------|------|-------------|
| POST | `/api/v1/visits` | ✅ User | Plan a visit |
| GET | `/api/v1/visits/my` | ✅ User | List my visits |
| PATCH | `/api/v1/visits/:id/status` | ✅ User | Update visit status |
| DELETE | `/api/v1/visits/:id` | ✅ User | Remove visit |

---

## Project Structure

```
cambodia-tourism/
├── backend/
│   ├── cmd/
│   │   └── server/
│   │       └── main.go          # Entry point — wires all dependencies
│   ├── config/
│   │   ├── config.go            # App config from environment
│   │   └── database.go          # DB init, migrations, seeder
│   ├── internal/
│   │   ├── domain/
│   │   │   └── domain.go        # Entities + DTOs (no imports from internal)
│   │   ├── repository/
│   │   │   └── repository.go    # DB access via interfaces
│   │   ├── service/
│   │   │   └── service.go       # Business logic + sentinel errors
│   │   ├── handler/
│   │   │   └── handler.go       # HTTP handlers (bind → service → respond)
│   │   ├── middleware/
│   │   │   └── middleware.go    # JWT auth, admin role check
│   │   └── pkg/
│   │       ├── response/        # Consistent JSON envelope
│   │       └── logger/          # Structured slog wrapper
│   ├── .env.example
│   ├── Dockerfile
│   └── go.mod
│
├── frontend/
│   ├── src/
│   │   ├── api/                 # Axios client + endpoint functions
│   │   ├── components/          # Shared components (Navbar, Footer, SiteCard)
│   │   ├── hooks/               # Zustand auth store
│   │   └── pages/               # Route pages
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
│
├── docker-compose.yml
└── README.md
```

---

## Environment Variables

```env
# Application
APP_ENV=development       # development | production
PORT=8080

# Database
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=your_password
DB_NAME=cambodia_tourism
DB_SSLMODE=disable

# JWT
JWT_SECRET=change-me-in-production
JWT_EXPIRY_HOURS=72

# CORS
CORS_ORIGIN_1=http://localhost:5173
CORS_ORIGIN_2=http://localhost:3000
```

---

## Contributing

This is a student project. If you are a classmate or reviewer:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/my-feature`
3. Commit with clear messages: `git commit -m "feat: add site image upload"`
4. Open a Pull Request

---

## Acknowledgements

- The victims and survivors of the Khmer Rouge genocide (1975–1979)
- [Tuol Sleng Genocide Museum](https://www.tuolsleng.gov.kh)
- [Choeung Ek Memorial](https://www.choeungek.com)
- [Chi Phat Community Ecotourism](https://www.chi-phat.org)
- [Wildlife Alliance](https://www.wildlifealliance.org)
- [Wildlife Conservation Society Cambodia](https://cambodia.wcs.org)

---

*Made with respect for Cambodia and its people.*