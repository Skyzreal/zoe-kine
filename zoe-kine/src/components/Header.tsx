import React from 'react';
import '../css/Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">Zoweanne</div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">À propos de moi</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><a href="#book" className="button">Réserver en ligne</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
