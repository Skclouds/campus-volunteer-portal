const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Temporary in-memory storage
let events = [
    { id: 1, name: "Campus Clean-up Drive", date: "2026-04-26", location: "Main Quad", capacity: 15 },
    { id: 2, name: "Tree Plantation Day", date: "2026-05-03", location: "North Garden", capacity: 20 },
    { id: 3, name: "Blood Donation Camp", date: "2026-05-10", location: "Health Center", capacity: 50 },
    { id: 4, name: "Tech for Good Hackathon", date: "2026-05-17", location: "Innovation Hub", capacity: 30 }
];

let registrations = [];

/* ===========================
   GET EVENTS
=========================== */
app.get('/events', (req, res) => {
    res.status(200).json(events);
});

/* ===========================
   ADD EVENT
=========================== */
app.post('/events', (req, res) => {
    const { name, date, location, capacity } = req.body;

    if (!name) {
        return res.status(400).json({ error: "Event name is required" });
    }

    const newEvent = {
        id: events.length ? Math.max(...events.map(e => e.id)) + 1 : 1,
        name,
        date,
        location,
        capacity: parseInt(capacity) || 10
    };

    events.push(newEvent);

    res.status(201).json({
        message: "Event added successfully",
        event: newEvent
    });
});

/* ===========================
   REGISTER USER
=========================== */
app.get('/registrations', (req, res) => {
    res.status(200).json(registrations);
});

app.post('/register', (req, res) => {
    const { name, email, eventId } = req.body;

    if (!name || !email || !eventId) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Email validation (same as your frontend logic)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
    }

    const newRegistration = {
        id: registrations.length + 1,
        name,
        email,
        eventId
    };

    registrations.push(newRegistration);

    res.status(200).json({
        message: "Registered successfully",
        data: newRegistration
    });
});

/* ===========================
   START SERVER
=========================== */
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});