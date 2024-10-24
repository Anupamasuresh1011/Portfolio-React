import Home from './Componemts/Home/Home'
import Projects from './Componemts/Projects/Projects'
import Contact from './Componemts/Contact/Contact'
import './App.css'
import About from './Componemts/About/About'
import Footer from './Componemts/Footer/Footer'
import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import Services from './Componemts/Services/Services'
import Error from './Componemts/Error/Error'
import React, { useState } from 'react';
import './index.css';
function App() {
  
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
    // Optionally, you could save the theme preference in localStorage
    // localStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
  };
  return (
    <>
    <div>
    <Router>
        <Routes className={isDarkTheme ? 'dark-theme' : 'light-theme'}>
        <Route path="/" element={<Home toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />} />
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      
    </Router>
    </div>
    </>
  )
}

export default App
