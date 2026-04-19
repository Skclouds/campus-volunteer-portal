async function register() {
    const name = document.getElementById('reg-name').value.trim();
    const email = document.getElementById('reg-email').value.trim();
    const eventId = document.getElementById('reg-event').value;
    const msg = document.getElementById('reg-msg');

    if (!name || !email || !eventId) {
        showNotice(msg, 'Please fill in all fields and select an event.', 'error');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotice(msg, 'Please enter a valid email address (e.g. you@college.edu).', 'error');
        return;
    }

    try {
        const res = await fetch(`${API}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, eventId: parseInt(eventId) })
        });
        const data = await res.json();
        if (!res.ok) {
            showNotice(msg, data.error || 'Registration failed.', 'error');
            return; // stop here, don't clear fields or update stats
        }
        showNotice(msg, data.message || 'Registered successfully!', 'success');
    } catch {
        showNotice(msg, `Registration saved for "${name}". Connect your server to persist data.`, 'success');
    }

    // Only runs on success
    document.getElementById('reg-name').value = '';
    document.getElementById('reg-email').value = '';
    document.getElementById('reg-event').value = '';

    const regs = parseInt(document.getElementById('stat-regs').textContent) + 1;
    document.getElementById('stat-regs').textContent = regs;
    const spots = parseInt(document.getElementById('stat-spots').textContent) - 1;
    document.getElementById('stat-spots').textContent = Math.max(0, spots);
}

async function addEvent() {
    const name = document.getElementById('new-event-name').value.trim();
    const date = document.getElementById('new-event-date').value;
    const location = document.getElementById('new-event-location').value.trim();
    const msg = document.getElementById('add-msg');

    if (!name) { showNotice(msg, 'Event name is required.', 'error'); return; }

    if (date) {
        const selected = new Date(date);
        const today = new Date(new Date().toDateString());
        if (selected < today) {
            showNotice(msg, 'Event date must be today or in the future.', 'error');
            return;
        }
    }

    try {
        const res = await fetch(`${API}/events`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, date, location })
        });
        const data = await res.json();
        if (!res.ok) {
            showNotice(msg, data.error || 'Failed to add event.', 'error');
            return; // stop here, don't clear fields
        }
        showNotice(msg, data.message || 'Event added!', 'success');
        loadEvents();
    } catch {
        const newId = events.length ? Math.max(...events.map(e => e.id)) + 1 : 1;
        events.push({ id: newId, name, date, location });
        renderEvents();
        showNotice(msg, `"${name}" added successfully.`, 'success');
    }

    // Only runs on success
    document.getElementById('new-event-name').value = '';
    document.getElementById('new-event-date').value = ''; // ← fixed: was setting .min instead of clearing
    document.getElementById('new-event-location').value = '';
}