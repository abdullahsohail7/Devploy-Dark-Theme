# SynergySphere Website

A modern, sophisticated website for SynergySphere - a technical solutions company specializing in MVP development, DevOps, AI, and MLOps for startups and innovators.

## 🚀 Features

- **Ultra-Modern Design**: Dark mode with vibrant electric accents and glass morphism effects
- **Interactive Calculator**: Real-time cost comparison tool with dynamic pricing
- **Smooth Animations**: Framer Motion powered animations and micro-interactions
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Built with Vite and React for fast loading
- **TypeScript**: Full type safety throughout the application

## 🎨 Design System

### Color Palette
- **Primary**: Deep blues, purples, and charcoals
- **Accents**: Electric blue (#00d4ff), neon green (#00ff88), purple (#8b5cf6), gold (#fbbf24)
- **Background**: Dark theme with subtle gradients and radial effects

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono for code elements

## 🛠️ Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Charts**: Recharts (for future enhancements)
- **3D Graphics**: Three.js (for future enhancements)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd synergysphere-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation component
│   ├── Hero.tsx        # Hero section with rotating headlines
│   ├── Advantage.tsx   # Problem/solution section
│   ├── Services.tsx    # Service offerings
│   ├── Calculator.tsx  # Interactive cost calculator
│   ├── Expertise.tsx   # Team expertise showcase
│   ├── CaseStudies.tsx # Success stories
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer component
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

## 🎯 Key Sections

### Hero Section
- Dynamic rotating headlines
- Interactive 3D background elements
- Multiple call-to-action buttons
- Smooth scroll indicator

### Advantage Section
- Problem/solution comparison
- Pain points vs. SynergySphere solutions
- Animated infographics

### Services Section
- Interactive service cards
- Hover animations and 3D effects
- Detailed benefits for each service

### Calculator Section
- Real-time cost comparison
- Interactive form controls
- Dynamic pricing calculations
- Visual cost savings display

### Expertise Section
- Team statistics and achievements
- Specialized skill areas
- Technology stack showcase

### Case Studies Section
- Success stories with metrics
- Client testimonials
- Technology tags

### Contact Section
- Comprehensive contact form
- Contact information cards
- Response time guarantee

## 🎨 Customization

### Colors
Update the color palette in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* ... */ },
  dark: { /* ... */ },
  electric: { /* ... */ }
}
```

### Animations
Customize animations in `tailwind.config.js`:
```javascript
animation: {
  'float': 'float 6s ease-in-out infinite',
  'glow': 'glow 2s ease-in-out infinite alternate',
  // ... more animations
}
```

### Content
Update content in individual component files:
- Service offerings in `Services.tsx`
- Calculator pricing in `Calculator.tsx`
- Case studies in `CaseStudies.tsx`
- Contact information in `Contact.tsx`

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Deploy to Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email hello@synergysphere.com or create an issue in the repository.

---

**SynergySphere** - Launch faster, scale smarter, achieve more. 