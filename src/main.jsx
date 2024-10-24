import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './Componemts/Home/Home.jsx'
import Projects from './Componemts/Projects/Projects.jsx'
import Contact from './Componemts/Contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
