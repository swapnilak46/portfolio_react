import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import all the required CSS files from original template in the same order they were included
// Base CSS files

import './assets/css/bootstrap.min.css'
// Main styles
import './assets/css/coloring.css'
import './assets/css/style.css'
import './assets/css/plugins.css'

// Custom component-specific styles
import './assets/css/blog-modal.css'

// Custom styles - using custom-style-4.css which was used in index-grey.html
import './assets/css/custom-style-4.css'




// Import main App component
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
