import 'bootstrap/dist/css/bootstrap.min.css';
import './Navy.css';
import React, { useState } from 'react';
import menuIcon from '../images/menu.png';

export const Navy: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <a href="#home" className="logo col-md-6">Tsiory.Dev</a>
        <div className="menu-icon" onClick={toggleMenu}>
          <img src={menuIcon} alt="Menu" />
        </div>
        <ul className={`col-md-6 ${menuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li><a href="#about" onClick={toggleMenu}>About</a></li>
          <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
          <li><a href="#project" onClick={toggleMenu}>Project</a></li>
        </ul>
      </header>
    </div>
  );
};
