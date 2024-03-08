import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h2>Sobre Nosotros</h2>
          <p>El mejor Hogar de Salud con los mejores profesionales.</p>
        </div>
        <div className="footer-section">
          <h2>Contactanos</h2>
          <p>Email: healthcare@care.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <div className="footer-section">
          <h2>Siguenos</h2>
          <p>Buscanos en nuestras redes para saber mas</p>
          {/* Add social media icons or links here */}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HealthCare. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
