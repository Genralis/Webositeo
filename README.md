# Genralis School Club Website

A modern, responsive website for the Genralis school club built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: 
  - Mobile-friendly navigation
  - Smooth scrolling
  - Contact form with validation
  - Event registration
  - Gallery lightbox
  - Scroll-to-top button
- **Performance Optimized**: Fast loading with optimized images and code
- **Accessibility**: Built with accessibility best practices

## File Structure

```
Genralis/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # This file
```



## Customization Guide

### 1. Club Information

Edit the following sections in `index.html`:

- **Club Name**: Change "Genralis" throughout the file
- **Description**: Update the hero subtitle and about section
- **Contact Information**: Update email, location, and meeting times
- **Social Media Links**: Replace placeholder links with actual social media URLs

### 2. Events

Update the events section in `index.html`:

```html
<div class="event-card">
    <div class="event-date">
        <span class="day">15</span>
        <span class="month">Dec</span>
    </div>
    <div class="event-content">
        <h3>Your Event Title</h3>
        <p>Event description here</p>
        <div class="event-meta">
            <span><i class="fas fa-clock"></i> Time</span>
            <span><i class="fas fa-map-marker-alt"></i> Location</span>
        </div>
        <button class="btn btn-primary">Register</button>
    </div>
</div>
```

### 3. Gallery Images

Replace the placeholder images in the gallery section:

```html
<img src="your-image-url.jpg" alt="Description">
```

**Recommended image sources:**
- Use actual photos from your club events
- Optimize images for web (recommended size: 800x600px)
- Use descriptive alt text for accessibility

### 4. Colors and Branding

Customize the color scheme in `styles.css`:

```css
/* Primary color */
--primary-color: #2563eb;

/* Secondary color */
--secondary-color: #7c3aed;

/* Background colors */
--bg-light: #f8fafc;
--bg-dark: #1f2937;
```

### 5. Statistics

Update the statistics in the about section:

```html
<div class="stat">
    <h3>50+</h3>
    <p>Active Members</p>
</div>
```

## Features Explained

### Navigation
- Fixed navigation bar with smooth scrolling
- Mobile hamburger menu
- Active state indicators

### Hero Section
- Gradient background with floating card animation
- Call-to-action buttons
- Responsive layout

### About Section
- Club description with features
- Animated statistics counters
- Feature cards with icons

### Events Section
- Event cards with dates and details
- Registration functionality
- Responsive grid layout

### Gallery Section
- Image grid with hover effects
- Lightbox functionality
- Click to view larger images

### Contact Section
- Contact information with icons
- Contact form with validation
- Social media links

### Footer
- Quick links
- Contact information
- Copyright notice

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

#


**Made with ❤️ for Genralis School Club** 
