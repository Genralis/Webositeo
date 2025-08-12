const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Enhanced in-memory storage (replace with database in production)
const subscribers = [];
const contacts = [];
const eventRegistrations = [];

// Real-time events data
const events = [
    {
        id: 1,
        title: "AI Project Showcase",
        date: "2024-12-15",
        time: "14:00",
        duration: "2 hours",
        location: "Computer Lab 201",
        description: "Present your AI projects and get feedback from peers and mentors. Open to all skill levels!",
        maxAttendees: 50,
        currentAttendees: 0,
        status: "upcoming",
        category: "showcase"
    },
    {
        id: 2,
        title: "Machine Learning Workshop",
        date: "2024-12-22",
        time: "15:30",
        duration: "1.5 hours",
        location: "AI Lab",
        description: "Hands-on workshop on building and training ML models. Bring your laptops!",
        maxAttendees: 30,
        currentAttendees: 0,
        status: "upcoming",
        category: "workshop"
    },
    {
        id: 3,
        title: "Competition Prep Session",
        date: "2025-01-05",
        time: "13:00",
        duration: "3 hours",
        location: "Innovation Hub",
        description: "Prepare for upcoming AI competitions with strategy sessions and team formation.",
        maxAttendees: 40,
        currentAttendees: 0,
        status: "upcoming",
        category: "competition"
    }
];

// Newsletter subscription endpoint
app.post('/api/subscribe', async (req, res) => {
    try {
        const { email } = req.body;
        
        if (!email) {
            return res.status(400).json({ success: false, message: 'Email is required' });
        }
        
        // Check if already subscribed
        if (subscribers.includes(email)) {
            return res.status(400).json({ success: false, message: 'Email already subscribed' });
        }
        
        // Add to subscribers list
        subscribers.push(email);
        
        // Log the subscription
        console.log('New newsletter subscriber:', email);
        
        // Here you would typically:
        // 1. Save to database
        // 2. Send welcome email
        // 3. Add to mailing list service
        
        res.json({ success: true, message: 'Successfully subscribed to newsletter!' });
        
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        if (!name || !email || !message) {
            return res.status(400).json({ success: false, message: 'Name, email, and message are required' });
        }
        
        // Add to contacts list
        contacts.push({
            name,
            email,
            subject: subject || 'No subject',
            message,
            date: new Date()
        });
        
        // Log the contact
        console.log('New contact form submission:', { name, email, subject, message });
        
        // Here you would typically:
        // 1. Save to database
        // 2. Send notification email to admin
        // 3. Send confirmation email to user
        
        res.json({ success: true, message: 'Message sent successfully! We\'ll get back to you soon.' });
        
    } catch (error) {
        console.error('Contact form error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Enhanced newsletter management endpoints
app.get('/api/subscribers-count', (req, res) => {
    res.json({ success: true, count: subscribers.length });
});

app.get('/api/subscribers', (req, res) => {
    res.json({ success: true, subscribers: subscribers });
});

app.delete('/api/unsubscribe/:email', (req, res) => {
    const { email } = req.params;
    const index = subscribers.indexOf(email);
    if (index > -1) {
        subscribers.splice(index, 1);
        res.json({ success: true, message: 'Successfully unsubscribed' });
    } else {
        res.status(404).json({ success: false, message: 'Email not found' });
    }
});

// Event management endpoints
app.get('/api/events', (req, res) => {
    res.json({ success: true, events: events });
});

app.get('/api/events/:id', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (event) {
        res.json({ success: true, event });
    } else {
        res.status(404).json({ success: false, message: 'Event not found' });
    }
});

app.post('/api/events', (req, res) => {
    const { title, date, time, location, description, maxAttendees, category } = req.body;
    const newEvent = {
        id: events.length + 1,
        title,
        date,
        time,
        duration: "2 hours",
        location,
        description,
        maxAttendees: maxAttendees || 50,
        currentAttendees: 0,
        status: "upcoming",
        category: category || "general"
    };
    events.push(newEvent);
    res.json({ success: true, event: newEvent });
});

// Enhanced event registration
app.post('/api/register-event', async (req, res) => {
    try {
        const { eventId, name, email } = req.body;
        
        if (!eventId || !name || !email) {
            return res.status(400).json({ success: false, message: 'Event ID, name, and email are required' });
        }
        
        const event = events.find(e => e.id === parseInt(eventId));
        if (!event) {
            return res.status(404).json({ success: false, message: 'Event not found' });
        }
        
        if (event.currentAttendees >= event.maxAttendees) {
            return res.status(400).json({ success: false, message: 'Event is full' });
        }
        
        // Check if already registered
        const existingRegistration = eventRegistrations.find(r => 
            r.eventId === parseInt(eventId) && r.email === email
        );
        
        if (existingRegistration) {
            return res.status(400).json({ success: false, message: 'Already registered for this event' });
        }
        
        // Add registration
        eventRegistrations.push({
            eventId: parseInt(eventId),
            name,
            email,
            date: new Date()
        });
        
        // Update event attendee count
        event.currentAttendees++;
        
        console.log('New event registration:', { eventTitle: event.title, name, email });
        
        res.json({ 
            success: true, 
            message: `Successfully registered for: ${event.title}`,
            event: event
        });
        
    } catch (error) {
        console.error('Event registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get contacts count
app.get('/api/contacts-count', (req, res) => {
    res.json({ success: true, count: contacts.length });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'healthy', 
        subscribers: subscribers.length,
        contacts: contacts.length,
        events: events.length,
        eventRegistrations: eventRegistrations.length,
        timestamp: new Date().toISOString()
    });
});

// Serve the main page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ success: false, message: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: 'Route not found' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Genralis AI Club server running on port ${PORT}`);
    console.log(`📧 Newsletter subscribers: ${subscribers.length}`);
    console.log(`📝 Contact submissions: ${contacts.length}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
}); 