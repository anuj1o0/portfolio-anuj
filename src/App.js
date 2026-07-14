import React from 'react';
import './App.scss';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Qualifications from './components/Qualifications/Qualifications';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Freelance from './components/Freelance/Freelance';
import Achievements from './components/Achievements/Achievements';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <main>
        <Home />
        <About />
        <Qualifications />
        <Skills />
        <Work />
        <Freelance />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <Scrollup />
    </ThemeProvider>
  );
};

export default App;
