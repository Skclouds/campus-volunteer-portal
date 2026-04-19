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

## 📝 License

This project is licensed under the ISC License.
