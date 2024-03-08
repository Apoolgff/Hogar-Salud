import React from 'react';
import '../styles/Hero.css';
import heroImage from '../assets/image/HeroImage.jpg'; // Importa la imagen del héroe

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Bienvenido al Hogar de Salud <span>HealthCare </span></h1>
        <p className="hero-text">Ofrecemos los mejores cuidados médicos de calidad para ti y tus seres queridos.</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Hero" className="hero-img" />
      </div>
    </div>
  );
}

export default Hero;
