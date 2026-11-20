

# Parkly

A parking space rental marketplace that connects drivers looking for parking with parking space owners.

## Tech Stack

### Frontend
- React.js
- Vite
- CSS
- React Leaflet
- OpenStreetMap
- Nginx

### Backend
- Node.js
- Express.js
- PostgreSQL (Neon)
- Prisma ORM
- JWT Authentication
- Razorpay
- Resend API

### DevOps & Deployment
- Docker
- Docker Compose
- GitHub Actions
- Vercel
- Render

## Features

- User registration and authentication
- Driver and parking provider roles
- Search parking spaces by area
- Interactive maps with parking locations
- Parking listing creation and editing
- Booking management
- Razorpay payment integration
- Booking email notifications with background processing and retry handling
- Automatic booking status updates
- Driver and provider dashboards
- Dockerized frontend and backend

## Running Locally

### Prerequisites
- Node.js
- PostgreSQL
- npm

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
npm start
```

Configure the environment variables using the provided `.env.example` files.

## Running with Docker

### Prerequisites
- Docker Desktop
- Docker Compose

### 1. Clone the repository

```bash
git clone https://github.com/lsiddhu/Parkly-parking-rental-application.git
cd Parkly-parking-rental-application
```

### 2. Configure environment variables

Create `server/.env` using the required variables from `server/.env.example`.

Configure your database connection, authentication secrets, Razorpay credentials, and Resend API key.

Never commit your `.env` file or expose your secret credentials.

### 3. Build and start the application

```bash
docker compose up --build -d
```

### 4. Access the application

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000
- Backend health check: http://localhost:5000/api/health

### 5. Stop the application

```bash
docker compose down
```

### Useful Docker Commands

```bash
# View running containers
docker compose ps

# View application logs
docker compose logs

# View backend logs
docker compose logs backend

# Rebuild containers
docker compose up --build -d
```

**Note:** Parkly uses Neon PostgreSQL as its external database. Docker does not create a local PostgreSQL container.

## Project Status

Currently under development.

