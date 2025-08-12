const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('.')); // Serve static files from current directory

// Simple in-memory storage (replace with database in production)
const subscribers = [];
const contacts = [];

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

// Event registration endpoint
app.post('/api/register-event', async (req, res) => {
    try {
        const { eventTitle, name, email } = req.body;
        
        if (!eventTitle || !name || !email) {
            return res.status(400).json({ success: false, message: 'Event title, name, and email are required' });
        }
        
        // Log the registration
        console.log('New event registration:', { eventTitle, name, email });
        
        // Here you would typically:
        // 1. Save to database
        // 2. Send confirmation email
        // 3. Add to event attendees list
        
        res.json({ success: true, message: `Successfully registered for: ${eventTitle}` });
        
    } catch (error) {
        console.error('Event registration error:', error);
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
});

// Get subscribers count (for admin purposes)
app.get('/api/subscribers-count', (req, res) => {
    res.json({ count: subscribers.length });
});

// Get contacts count (for admin purposes)
app.get('/api/contacts-count', (req, res) => {
    res.json({ count: contacts.length });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        subscribers: subscribers.length,
        contacts: contacts.length
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