import React from 'react';
import "./App.css";
import Header from './components/header/Header';
import  Home  from './components/pages/home/Home';
import About from './components/pages/about/About';
import Skills from './components/pages/skills/Skills';
import Services from './components/pages/services/Services';
import Qualification from './components/pages/qualification/Qualification';
import Contact from './components/pages/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';


function App() {
  return (
  <>
  <Header/>


  <main className='main'>
    <Home/>
    <About/>
    <Skills/>
    <Services/>
    <Qualification/>
    <Contact/>
  </main>
  <Footer/>
    <ScrollUp/>    
  </>
  );
}

export default App;
