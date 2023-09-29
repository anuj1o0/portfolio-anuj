import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';
import Qualifications from './components/Qualifications/Qualifications';
import Testimonial from './components/Testimonial/Testimonial';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

const App=()=> {
  return (
    <>
      <Header/>
      <main className='main'>
        <Home/>
      
      <About/>
      <Qualifications/>
      <Skills/>
      <Work/>
      <Testimonial/>
      <Contact/>
      </main>
      <Footer/>
      <Scrollup/>
    </>
  );
}

export default App;
