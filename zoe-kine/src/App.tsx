import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

export default App;
