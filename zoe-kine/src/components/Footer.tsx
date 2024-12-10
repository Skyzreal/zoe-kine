import React from 'react';
import '../css/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <ul>
        <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
        <li><a href="mailto:contact@example.com">Email</a></li>
      </ul>
    </footer>
  );
}

export default Footer;
