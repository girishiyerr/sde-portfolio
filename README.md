# Interactive SDE Portfolio

A modern, interactive portfolio website built with React, showcasing skills, projects, and DSA journey with beautiful animations and interactive features.

## ✨ Features

### 🎨 **Visual Design**
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Optimized for all screen sizes
- **Custom Animations**: Framer Motion powered smooth transitions

### 🚀 **Interactive Sections**
- **Hero Section**: Animated landing with floating elements and typewriter effect
- **About**: Personal story, interests, and animated statistics
- **Experience**: Timeline with professional and personal achievements
- **Projects**: Interactive project gallery with detailed modals
- **Skills**: Clickable skill boxes with code examples and syntax highlighting
- **DSA Journey**: Problem-solving showcase with visual explanations
- **Contact**: Form with social links and striking CTA

### 💻 **Technical Features**
- **React 18**: Latest React features and hooks
- **Vite**: Fast development and build tooling
- **Tailwind CSS**: Utility-first styling with custom design system
- **Framer Motion**: Advanced animations and transitions
- **Syntax Highlighting**: Code examples with Prism.js
- **Intersection Observer**: Scroll-triggered animations
- **TypeScript Ready**: Full TypeScript support

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **Animations**: Framer Motion, React Intersection Observer
- **Code Highlighting**: React Syntax Highlighter, Prism.js
- **Icons**: Lucide React
- **Deployment**: Netlify/Vercel ready

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd sde-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
```

The build output will be in the `dist` folder.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.jsx      # Navigation with theme toggle
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About and interests
│   ├── Experience.jsx  # Timeline experience
│   ├── Projects.jsx    # Project gallery
│   ├── Skills.jsx      # Interactive skills
│   ├── DSA.jsx         # DSA problems showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer with tech stack
├── context/            # React context
│   └── ThemeContext.jsx # Dark/light mode
├── App.jsx             # Main app component
├── main.jsx            # React entry point
└── index.css           # Global styles
```

## 🎯 Customization

### Personal Information
Update the following files with your information:

1. **Personal Details**: Update `src/components/Hero.jsx`, `src/components/About.jsx`
2. **Experience**: Modify `src/components/Experience.jsx`
3. **Projects**: Edit `src/components/Projects.jsx` with your projects
4. **Skills**: Customize `src/components/Skills.jsx` with your expertise
5. **DSA Problems**: Add your solved problems in `src/components/DSA.jsx`
6. **Contact**: Update contact info in `src/components/Contact.jsx`

### Styling
- **Colors**: Modify `tailwind.config.js` for custom color scheme
- **Animations**: Adjust animation settings in component files
- **Layout**: Update spacing and layout in component classes

### Content
- **Profile Photo**: Replace placeholder in Hero section
- **Project Screenshots**: Add actual project images
- **Resume**: Add your resume PDF for download
- **Social Links**: Update all social media links

## 🌐 Deployment

### Netlify (Recommended)
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Vercel
1. Import your GitHub repository
2. Vercel auto-detects Vite/React
3. Deploy with zero configuration

### GitHub Pages
1. Add GitHub Actions workflow for deployment
2. Set up repository settings
3. Deploy from `dist` folder

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (`#0ea5e9` to `#0284c7`)
- **Secondary**: Purple gradient (`#d946ef` to `#c026d3`)
- **Dark Mode**: Custom dark theme with proper contrast

### Typography
- **Headings**: Inter font family
- **Code**: Fira Code monospace font
- **Body**: Inter with various weights

### Animations
- **Entrance**: Fade-in and slide-up effects
- **Hover**: Scale and color transitions
- **Scroll**: Intersection Observer triggered animations
- **Loading**: Smooth page transitions

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## ♿ Accessibility

- **Keyboard Navigation**: Full keyboard support
- **Screen Readers**: Proper ARIA labels and semantic HTML
- **Color Contrast**: WCAG compliant color combinations
- **Focus Management**: Clear focus indicators

## 🔧 Development

### Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/App.jsx`
3. Add to navigation in `src/components/Navbar.jsx`
4. Style with Tailwind classes

## 📈 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Images**: WebP format with fallbacks
- **Animations**: Hardware accelerated

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Vite** for fast development experience

---

**Made with ❤️ and lots of ☕**

For questions or support, reach out at [your.email@example.com](mailto:your.email@example.com) 