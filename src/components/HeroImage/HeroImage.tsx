import React from 'react';
import './HeroImage.css';

interface HeroImageProps {
  src: string;
  alt: string;
  title?: string;
  subtitle?: string;
}

const HeroImage = ({ src, alt, title, subtitle }: HeroImageProps) => {
  return (
    <div className="hero-image" style={{ backgroundImage: `url(${src})` }}>
      <div className="hero-overlay">
        {title && <h1>{title}</h1>}
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default HeroImage;
