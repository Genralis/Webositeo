# 🚀 Content Update Guide - Genralis AI Club Website

## 📝 **How to Update Content Once Live**

### **Method 1: Local Edit + Deploy (Recommended)**

#### **Step 1: Edit Files Locally**
1. **Open your project folder** (`C:\Genralis`)
2. **Edit the files** using any text editor
3. **Test locally** at `http://localhost:3000`
4. **Commit and push** to GitHub
5. **Automatic deployment** (if using Netlify/Vercel)

#### **Step 2: Quick Commands**
```bash
# After making changes
git add .
git commit -m "Update gallery with new AI projects"
git push
```

---

## 🖼️ **Gallery Updates**

### **Current Gallery Structure**
```html
<div class="gallery-item">
    <img src="YOUR_IMAGE_URL" alt="Description">
    <div class="gallery-overlay">
        <h3>Title</h3>
        <p>Description</p>
    </div>
</div>
```

### **How to Update Gallery**

#### **Option 1: Use Online Images**
```html
<!-- Replace the image URL -->
<img src="https://your-image-url.com/image.jpg" alt="AI Project Demo">

<!-- Update title and description -->
<h3>AI Project Demo</h3>
<p>Students showcasing their machine learning projects</p>
```

#### **Option 2: Use Local Images**
1. **Add images** to `images/` folder
2. **Update HTML**:
```html
<img src="images/ai-project-1.jpg" alt="AI Project Demo">
```

#### **Option 3: Add New Gallery Items**
```html
<!-- Add this after existing gallery items -->
<div class="gallery-item">
    <img src="images/new-project.jpg" alt="New AI Project">
    <div class="gallery-overlay">
        <h3>New AI Project</h3>
        <p>Latest innovation from our club</p>
    </div>
</div>
```

---

## 📅 **Events Updates**

### **Current Event Structure**
```html
<div class="event-card">
    <div class="event-date">
        <span class="day">15</span>
        <span class="month">Dec</span>
    </div>
    <div class="event-content">
        <h3>Event Title</h3>
        <p>Event description</p>
        <div class="event-meta">
            <span><i class="fas fa-clock"></i> Time</span>
            <span><i class="fas fa-map-marker-alt"></i> Location</span>
        </div>
        <button class="btn btn-primary">Register</button>
    </div>
</div>
```

### **How to Update Events**

#### **Change Event Details**
```html
<!-- Update date -->
<span class="day">20</span>
<span class="month">Jan</span>

<!-- Update title and description -->
<h3>Machine Learning Workshop</h3>
<p>Learn TensorFlow and build your first AI model</p>

<!-- Update time and location -->
<span><i class="fas fa-clock"></i> 2:00 PM - 4:00 PM</span>
<span><i class="fas fa-map-marker-alt"></i> Computer Lab 301</span>
```

#### **Add New Events**
```html
<!-- Add this after existing events -->
<div class="event-card">
    <div class="event-date">
        <span class="day">25</span>
        <span class="month">Jan</span>
    </div>
    <div class="event-content">
        <h3>AI Competition Prep</h3>
        <p>Prepare for the upcoming AI hackathon</p>
        <div class="event-meta">
            <span><i class="fas fa-clock"></i> 1:00 PM - 3:00 PM</span>
            <span><i class="fas fa-map-marker-alt"></i> Innovation Hub</span>
        </div>
        <button class="btn btn-primary">Register</button>
    </div>
</div>
```

---

## 📊 **Statistics Updates**

### **Current Stats Structure**
```html
<div class="stat">
    <h3>50+</h3>
    <p>Active Members</p>
</div>
```

### **How to Update Statistics**
```html
<!-- Update numbers -->
<h3>75+</h3>
<p>Active Members</p>

<!-- Add new stats -->
<div class="stat">
    <h3>15+</h3>
    <p>AI Projects Completed</p>
</div>
```

---

## 📧 **Contact Information Updates**

### **Update Contact Details**
```html
<!-- Update email -->
<p>genralis@yourschool.edu</p>

<!-- Update location -->
<p>Room 205, Engineering Building</p>

<!-- Update meeting times -->
<p>Every Monday & Wednesday, 4:00 PM</p>

<!-- Update social media links -->
<a href="https://instagram.com/genralis-ai" class="social-link">
    <i class="fab fa-instagram"></i>
</a>
```

---

## 🎨 **Content Areas to Update**

### **1. Hero Section**
- **Title**: Line 35 in `index.html`
- **Subtitle**: Line 36 in `index.html`
- **Buttons**: Lines 37-40 in `index.html`

### **2. About Section**
- **Description**: Line 55 in `index.html`
- **Features**: Lines 60-70 in `index.html`
- **Statistics**: Lines 75-85 in `index.html`

### **3. Events Section**
- **Event cards**: Lines 95-140 in `index.html`
- **Dates, titles, descriptions**: Update each event card

### **4. Gallery Section**
- **Images**: Lines 150-200 in `index.html`
- **Titles and descriptions**: Update overlay text

### **5. Contact Section**
- **Email, location, times**: Lines 230-250 in `index.html`
- **Social media links**: Lines 260-270 in `index.html`

---

## 🚀 **Deployment Options**

### **Option 1: Netlify (Automatic)**
1. **Connect GitHub** to Netlify
2. **Every push** automatically deploys
3. **Instant updates** when you push changes

### **Option 2: GitHub Pages**
1. **Push to GitHub**
2. **Wait 2-3 minutes** for deployment
3. **Changes appear** automatically

### **Option 3: Manual Upload**
1. **Edit files locally**
2. **Upload to hosting** via FTP/File Manager
3. **Refresh website** to see changes

---

## 📱 **Quick Update Workflow**

### **For Gallery Updates:**
1. **Add images** to `images/` folder
2. **Edit `index.html`** lines 150-200
3. **Test locally**: `http://localhost:3000`
4. **Commit and push**:
   ```bash
   git add .
   git commit -m "Update gallery with new AI projects"
   git push
   ```

### **For Events Updates:**
1. **Edit `index.html`** lines 95-140
2. **Update dates, titles, descriptions**
3. **Test locally**
4. **Commit and push**

### **For Contact Updates:**
1. **Edit `index.html`** lines 230-270
2. **Update email, location, social links**
3. **Test locally**
4. **Commit and push**

---

## 🛠️ **Advanced Customization**

### **Add New Sections**
```html
<!-- Add new section -->
<section id="projects" class="projects">
    <div class="container">
        <h2 class="section-title">Our AI Projects</h2>
        <!-- Add your content here -->
    </div>
</section>
```

### **Add Custom CSS**
```css
/* Add to styles.css */
.projects {
    background: #0f0f0f;
    padding: 80px 0;
}
```

### **Add JavaScript Functionality**
```javascript
// Add to script.js
// Your custom functionality here
```

---

## 📋 **Update Checklist**

- [ ] **Test changes locally** first
- [ ] **Check mobile responsiveness**
- [ ] **Verify all links work**
- [ ] **Test forms and functionality**
- [ ] **Commit changes** with descriptive message
- [ ] **Push to GitHub**
- [ ] **Verify live site** after deployment

---

## 🆘 **Need Help?**

### **Common Issues:**
1. **Images not loading**: Check file paths
2. **Styling broken**: Check CSS syntax
3. **Deployment failed**: Check GitHub for errors

### **Quick Fixes:**
- **Undo changes**: `git checkout -- filename`
- **Reset to last working version**: `git reset --hard HEAD~1`
- **Force push**: `git push --force` (use carefully)

---

**Your website is now easy to update! Just edit, commit, and push! 🚀** 