# Images Folder

## Adding Your Logo

### Option 1: Use Your Own Logo File
1. **Place your logo file** in this folder
2. **Recommended formats**: PNG, SVG, JPG
3. **Recommended size**: 200x200px or larger
4. **File naming**: `genralis-logo.png` (or your preferred name)

### Option 2: Current Setup
Your website currently uses a **text + icon logo**:
- Robot icon (🤖) + "Genralis" text
- Blue color scheme (#2563eb)
- Responsive design

### How to Switch to Image Logo
1. **Add your logo file** to this folder
2. **Edit `index.html`**:
   - Find the navigation section
   - Uncomment the image logo line:
   ```html
   <img src="images/your-logo.png" alt="Genralis Logo" class="logo-img">
   ```
   - Comment out the text logo section

### Logo Placement
- **Navigation bar**: Top left of every page
- **Footer**: Bottom of the page
- **Mobile**: Automatically scales down

### Supported Formats
- ✅ PNG (recommended for logos)
- ✅ SVG (best for scaling)
- ✅ JPG (for photos)
- ✅ WebP (modern format)

### Tips
- Use transparent background for best results
- Keep file size under 100KB
- Test on mobile devices
- Ensure good contrast with background 