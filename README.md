# John Doe React - Static HTML to React Conversion

This project is a conversion of the John Doe HTML template into a modern React application.

## Project Structure

- `src/components/` - Contains all the reusable React components
- `src/pages/` - Contains page-level components
- `src/assets/` - Contains CSS files and other assets
- `public/` - Contains static assets like images, fonts, etc.

## Components Implemented

1. **Header** - Navigation component with mobile menu toggle
2. **HeroSection** - Hero banner with typed text animation using Typed.js
3. **AboutSection** - About me section with skill progress circles
4. **QuoteSection** - Quote section with jarallax background
5. **ServicesSection** - Services/what I do section
6. **PortfolioSection** - Portfolio gallery with modal functionality
7. **ResumeSection** - Resume section with experience and education timelines
8. **FunFactsSection** - Statistics counters with jarallax background
9. **BlogSection** - Blog posts carousel using OwlCarousel
10. **ContactSection** - Contact form with validation using Formik and Yup
11. **Footer** - Footer with copyright and social links

## Libraries Used

- **typed.js** - For the typing animation effect in the hero section
- **jarallax** - For parallax background effects
- **wowjs** - For scroll animations
- **react-circle-progress-bar** - For the skills section progress circles
- **react-countup** - For the fun facts counters
- **react-owl-carousel** - For the blog posts carousel
- **formik & yup** - For form handling and validation
- **react-modal** - For portfolio and blog modals

## Installation and Running

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server

## Recent Updates

1. **Static Assets Copied** - All images, fonts, and JavaScript files from the original template have been copied to the `public/` directory
2. **CSS Files Integrated** - All CSS files have been copied and fixed for React compatibility
3. **CSS Paths Fixed** - Updated relative paths in CSS files to use absolute paths from public directory
4. **WOW.js Import Fixed** - Corrected the import syntax for WOW.js across all components
5. **BlogSection Enhanced** - Added category and date metadata to blog posts, improved the blog modal
6. **Modal Styling** - Added dedicated CSS for blog post modals
7. **Fixed @charset Position** - Moved @charset rule to the beginning of CSS files to meet requirements

## What's Next

1. **Testing and Optimization** - Test on different devices and optimize performance
2. **Error Fixing** - Address any remaining CSS or JavaScript issues
3. **Responsive Testing** - Ensure the site works well on all device sizes
4. **Deployment** - Deploy to a production environment

## Running the Project

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Credits

Original HTML Template: John Doe by Designesia
