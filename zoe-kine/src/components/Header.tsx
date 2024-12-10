import React from 'react'
import '../css/Header.css'

const Header:React.FC = () => {
    return (
        <header className="header">
            <div className="logo">Zoweanne</div>
            <nav>
                <ul>
                    <li><a href="#about">À propos de moi</a></li>
                    <li><a href="#services">Mes services</a></li>
                    <li><a href="#contact">Contactt</a></li>
                    <li><a href="#book" className="button">Réserver en ligne</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;