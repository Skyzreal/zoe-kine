import React from 'react';
import '../css/HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      {/* Background Shapes */}
      <div className="background-shapes">
        <div className="shape circle yellow"></div>
        <div className="shape circle blue"></div>
        <div className="shape circle purple"></div>
        <div className="dots"></div>
      </div>

      {/* Content */}
      <div className="intro">
        <h1>Zoweanne Fournier</h1>
        <h2>Kiné­siologue accré­ditée</h2>
        <a href="#services" className="button">Mes services</a>
      </div>

      {/* Image */}
      <div className="hero-image">
        <img src="/path-to-image.jpg" alt="Zoweanne" />
      </div>
    </section>
  );
}

export default HeroSection;
