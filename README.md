# Campus Volunteer Portal

A modern, responsive web application designed to facilitate campus volunteer activities. Students can browse upcoming events, register for volunteering opportunities, and view the community of registered volunteers. Admins can manage the event list and set capacities for each activity.

## 🚀 Features

- **Event Dashboard**: View all upcoming campus events with dates, locations, and remaining spots.
- **Volunteer Registration**: Easy sign-up process for students with built-in validation.
- **Volunteer Community**: A dedicated tab to view all registered volunteers and the events they are supporting.
- **Dynamic Capacity Management**: Real-time tracking of available spots per event.
- **Admin Panel**: Add new events with specific dates, locations, and volunteer capacities.
- **Responsive Design**: Elegant and modern UI that works perfectly on desktop and mobile devices.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6+ Fetch API)
- **Backend**: Node.js, Express.js
- **Middleware**: CORS, Express JSON parser

## 📋 Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- npm (comes with Node.js)

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Skclouds/campus-volunteer-portal.git
cd campus-volunteer-portal
```

### 2. Backend Setup
```bash
cd backend
npm install
npm start
```
The backend server will run on [http://localhost:3000](http://localhost:3000).

### 3. Frontend Setup
You can open the `frontend/index.html` file directly in your browser or serve it using a static server:
```bash
cd ../frontend
# Using npx serve (recommended)
npx serve -l 8080
```
The frontend will be accessible at [http://localhost:8080](http://localhost:8080).

## 🚀 Deployment

### Backend Deployment
The backend can be deployed to platforms like Heroku, Render, or Railway.

1. **Heroku**:
   - Create a Heroku app
   - Connect your GitHub repository
   - Set buildpack to Node.js
   - Deploy automatically on push

2. **Render**:
   - Create a new Web Service
   - Connect GitHub repo
   - Set build command: `npm install`
   - Set start command: `npm start`

### Frontend Deployment
The frontend is a static site that can be deployed to Netlify, Vercel, or GitHub Pages.

1. **Netlify**:
   - Connect GitHub repository
   - Set build command: (leave empty for static)
   - Set publish directory: `frontend`
   - Deploy

2. **GitHub Pages**:
   - Go to repository Settings > Pages
   - Set source to GitHub Actions or Deploy from a branch
   - For static files, use the `frontend` folder

Note: Update the API endpoints in the frontend code to point to the deployed backend URL.

## 📂 Project Structure

- `backend/`: Node.js server with Express.
  - `server.js`: Main server logic and API endpoints.
  - `package.json`: Backend dependencies and scripts.
- `frontend/`: Client-side application.
  - `index.html`: Single-page application containing UI and logic.
- `.gitignore`: Standard git ignore rules.

## 🛣️ API Endpoints

- `GET /events`: Fetch all upcoming events.
- `POST /events`: Add a new event (Admin).
- `GET /registrations`: Get list of all volunteer registrations.
- `POST /register`: Register a volunteer for a specific event.

## ✅ Project Status — Completed

> **Status:** 🚀 Completed & Deployed  
> **Completed On:** April 2026  


### Final Delivery Summary

| Task                        | Status      |
|-----------------------------|-------------|
| `main` branch created       | ✅ Done      |
| Development completed       | ✅ Done      |
| Code review & approval      | ✅ Done      |
| Deployment to production    | ✅ Done      |
| Project finalization        | ✅ Done      |

> 🎉 This project has been successfully completed.  
> All deliverables have been met and the application is live in production.  
> For any future queries, please open a GitHub issue or contact the project team.

