const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// In-memory data (no database needed)
let events = [
    { id: 1, name: "Tree Plantation", date: "2025-05-10", location: "City Park" },
    { id: 2, name: "Beach Cleanup", date: "2025-05-15", location: "Marine Drive" },
    { id: 3, name: "Blood Donation", date: "2025-05-20", location: "City Hospital" }
];

let registrations = [];

// GET all events
app.get('/events', (req, res) => {
    res.json(events);
});

// POST register a volunteer
app.post('/register', (req, res) => {
    const { name, email, eventId } = req.body;
    if (!name || !email || !eventId) {
        return res.status(400).json({ error: "name, email, eventId are required" });
    }
    const registration = { id: registrations.length + 1, name, email, eventId };
    registrations.push(registration);
    res.status(201).json({ message: "Registered successfully", data: registration });
});

// POST add new event (admin)
app.post('/events', (req, res) => {
    const { name, date, location } = req.body;
    if (!name) return res.status(400).json({ error: "Event name is required" });
    const newEvent = { id: Date.now(), name, date: date || "TBD", location: location || "TBD" };
    events.push(newEvent);
    res.status(201).json({ message: "Event added", data: newEvent });
});

// GET all registrations (admin)
app.get('/registrations', (req, res) => {
    res.json(registrations);
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});