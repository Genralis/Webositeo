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

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Local development**: Use a local server for the best experience:
   - Python: `python -m http.server 8000`
   - Node.js: `npx serve .`
   - VS Code: Use the Live Server extension

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

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Use WebP Format**: For better compression (with fallbacks)
3. **Minify Code**: For production deployment
4. **Enable Caching**: Configure server caching headers

## Deployment Options

### GitHub Pages
1. Create a GitHub repository
2. Upload your files
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

### Netlify
1. Drag and drop your folder to Netlify
2. Get a custom domain (optional)
3. Automatic deployments from Git

### Vercel
1. Connect your GitHub repository
2. Automatic deployments
3. Custom domain support

### Traditional Web Hosting
1. Upload files via FTP
2. Configure domain settings
3. Set up SSL certificate

## Customization Examples

### Adding a New Section

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">New Section</h2>
        <div class="content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

### Adding Custom CSS

```css
.new-section {
    background: #f8fafc;
    padding: 80px 0;
}

.new-section .content {
    /* Your styles here */
}
```

### Adding JavaScript Functionality

```javascript
// Your custom JavaScript here
document.addEventListener('DOMContentLoaded', function() {
    // Initialize your features
});
```

## Troubleshooting

### Common Issues

1. **Images not loading**: Check file paths and ensure images exist
2. **Fonts not loading**: Verify internet connection for Google Fonts
3. **Mobile menu not working**: Check JavaScript console for errors
4. **Form not submitting**: Ensure all required fields are filled

### Debug Mode

Add this to your browser console to enable debug mode:

```javascript
localStorage.setItem('debug', 'true');
```

## Support

For questions or issues:
1. Check the browser console for error messages
2. Verify all file paths are correct
3. Test in different browsers
4. Check mobile responsiveness

## License

This project is open source and available under the MIT License.

## Credits

- **Fonts**: Google Fonts (Poppins)
- **Icons**: Font Awesome
- **Images**: Unsplash (placeholder images)
- **Design**: Custom design for Genralis school club

---

**Made with ❤️ for Genralis School Club** 