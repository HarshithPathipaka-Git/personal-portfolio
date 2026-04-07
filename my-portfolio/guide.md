"# Portfolio Customization Guide

## 🎨 Your Portfolio is Ready!

This is a modern, professional full-stack developer portfolio with theme toggle (Professional Blue/White ↔ Monochrome).

## 📁 Project Structure

```
/app/frontend/src/
├── data/
│   └── portfolioData.js          # ⭐ EDIT THIS FILE to customize all content
├── components/
│   ├── Header.js                 # Navigation bar with theme toggle
│   ├── Hero.js                   # Landing section
│   ├── About.js                  # About section
│   ├── Skills.js                 # Skills with progress bars
│   ├── Projects.js               # Project showcase with filters
│   ├── Experience.js             # Work experience timeline
│   ├── Testimonials.js           # Client testimonials
│   ├── Blog.js                   # Blog/Articles section
│   ├── Contact.js                # Contact form
│   └── Footer.js                 # Footer section
├── context/
│   └── ThemeContext.js           # Theme management
├── styles/
│   └── portfolio.css             # All styles (Professional & Monochrome themes)
└── App.js                        # Main app component
```

## ✏️ How to Customize Your Portfolio

### 1. **Edit Personal Information** (`/app/frontend/src/data/portfolioData.js`)

#### Update Your Details:
```javascript
export const personalInfo = {
  name: \"Your Name\",
  title: \"Your Job Title\",
  tagline: \"Your catchy tagline\",
  bio: \"Your bio/about text\",
  email: \"your.email@example.com\",
  phone: \"+1 (555) 123-4567\",
  location: \"Your City, State\",
  avatar: \"URL to your avatar image\",
  social: {
    github: \"https://github.com/yourusername\",
    linkedin: \"https://linkedin.com/in/yourusername\",
    twitter: \"https://twitter.com/yourusername\",
    portfolio: \"https://yourwebsite.com\"
  }
};
```

#### Update Skills:
```javascript
export const skills = {
  frontend: [
    { name: \"React\", level: 90 },  // Add/remove skills and adjust levels
    // ... more skills
  ],
  backend: [
    { name: \"Python\", level: 90 },
    // ... more skills
  ],
  tools: [
    { name: \"Git\", level: 90 },
    // ... more skills
  ]
};
```

#### Update Projects:
```javascript
export const projects = [
  {
    id: 1,
    title: \"Project Name\",
    description: \"Project description\",
    image: \"https://your-image-url.com/image.jpg\",
    tech: [\"React\", \"Python\", \"MongoDB\"],
    github: \"https://github.com/yourusername/project\",
    demo: \"https://project-demo.com\",
    featured: true  // Show in featured filter
  },
  // ... more projects
];
```

#### Update Experience:
```javascript
export const experience = [
  {
    id: 1,
    title: \"Job Title\",
    company: \"Company Name\",
    location: \"City, State\",
    period: \"2022 - Present\",
    description: \"Job description\",
    achievements: [
      \"Achievement 1\",
      \"Achievement 2\",
      \"Achievement 3\"
    ]
  },
  // ... more experience
];
```

#### Update Testimonials:
```javascript
export const testimonials = [
  {
    id: 1,
    name: \"Client Name\",
    role: \"Client Role, Company\",
    avatar: \"https://avatar-url.com\",
    content: \"Testimonial text\"
  },
  // ... more testimonials
];
```

#### Update Blog Posts:
```javascript
export const blogPosts = [
  {
    id: 1,
    title: \"Article Title\",
    excerpt: \"Article summary\",
    date: \"2024-01-15\",
    readTime: \"5 min read\",
    category: \"Category\",
    image: \"https://article-image.com\"
  },
  // ... more articles
];
```

### 2. **Customize Colors** (`/app/frontend/src/styles/portfolio.css`)

The portfolio has two themes controlled by CSS variables:

#### Professional Theme (Blue & White):
```css
:root {
  --primary: #2563eb;        /* Main blue color */
  --primary-dark: #1d4ed8;   /* Darker blue for hovers */
  --primary-light: #60a5fa;  /* Lighter blue */
  --secondary: #3b82f6;      /* Secondary blue */
  /* ... change these to your preferred colors */
}
```

#### Monochrome Theme (Black, White, Gray):
```css
[data-theme=\"monochrome\"] {
  --primary: #0f0f10;        /* Main black */
  --primary-dark: #000000;   /* Pure black */
  /* ... adjust grayscale colors */
}
```

### 3. **Change Fonts** (`/app/frontend/src/styles/portfolio.css`)

Find this line and change the font:
```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
```

Popular developer fonts:
- **Roboto** - Clean, modern
- **Inter** - Currently used
- **Poppins** - Friendly, rounded
- **Source Sans Pro** - Professional
- **Fira Code** - Monospace for code feel

## 🚀 Porting to Vite

Since you mentioned using Vite, here's how to port this code:

### 1. Create a new Vite project:
```bash
npm create vite@latest my-portfolio -- --template react
cd my-portfolio
npm install
```

### 2. Install dependencies:
```bash
npm install react-router-dom lucide-react
```

### 3. Copy these files from this project:
- Copy entire `/app/frontend/src/components/` folder
- Copy entire `/app/frontend/src/data/` folder
- Copy entire `/app/frontend/src/context/` folder
- Copy entire `/app/frontend/src/styles/` folder
- Copy `/app/frontend/src/App.js` content

### 4. Update `src/main.jsx`:
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/portfolio.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### 5. Update `index.html`:
```html
<!DOCTYPE html>
<html lang=\"en\">
  <head>
    <meta charset=\"UTF-8\" />
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />
    <title>Your Name - Full Stack Developer</title>
    <meta name=\"description\" content=\"Full Stack Developer Portfolio\" />
  </head>
  <body>
    <div id=\"root\"></div>
    <script type=\"module\" src=\"/src/main.jsx\"></script>
  </body>
</html>
```

## 📦 Deploying to GitHub Pages

### 1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

### 2. Update `package.json`:
```json
{
  \"name\": \"my-portfolio\",
  \"homepage\": \"https://yourusername.github.io/your-repo-name\",
  \"scripts\": {
    \"dev\": \"vite\",
    \"build\": \"vite build\",
    \"preview\": \"vite preview\",
    \"predeploy\": \"npm run build\",
    \"deploy\": \"gh-pages -d dist\"
  }
}
```

### 3. Update `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/'  // Replace with your repo name
})
```

### 4. Deploy:
```bash
npm run deploy
```

Your site will be live at: `https://yourusername.github.io/your-repo-name`

## 🎨 Theme Toggle

Users can switch between:
- **Professional Theme**: Blue and white (default)
- **Monochrome Theme**: Black, white, and gray

The theme preference is saved in localStorage and persists across visits.

## 📱 Responsive Design

The portfolio is fully responsive and works on:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## ✨ Features

- ✅ Smooth scrolling navigation
- ✅ Theme toggle (Professional ↔ Monochrome)
- ✅ Animated sections with hover effects
- ✅ Project filtering by technology
- ✅ Working contact form (frontend only)
- ✅ Fully responsive design
- ✅ Clean, modular code
- ✅ Easy to customize

## 🔧 Advanced Customization

### Add New Sections:
1. Create component in `/app/frontend/src/components/`
2. Add styles in `/app/frontend/src/styles/portfolio.css`
3. Import and add to `App.js`

### Modify Animations:
Edit CSS animations in `portfolio.css`:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

## 📝 Notes

- All content is in `portfolioData.js` for easy editing
- No backend required (frontend only)
- Contact form currently logs to console (add backend for real emails)
- Images use external URLs (replace with your own)
- Theme preference saved in browser localStorage

## 🎯 Quick Start Checklist

1. ✅ Edit `portfolioData.js` with your information
2. ✅ Replace avatar and project images
3. ✅ Update social media links
4. ✅ Customize colors in `portfolio.css` (optional)
5. ✅ Change font if desired (optional)
6. ✅ Test locally
7. ✅ Port to Vite
8. ✅ Deploy to GitHub Pages

## 🆘 Need Help?

- All sections are modular and independent
- Each component is well-commented
- CSS is organized by section
- Theme variables make color changes easy

Enjoy your new portfolio! 🚀
"