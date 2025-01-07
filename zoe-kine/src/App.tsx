import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './pages/HeroSection';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/HeroSection';
import About from './pages/About';
import Contact from './pages/Contact';
function App() {
  return (
    <>
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}

export default App;
