import React from 'react';
import './Img.css';

interface ImgProps {
  src: string;
  alt: string;
  width?: string;
  height?: string;
}

const Img = ({ src, alt, width = '100%', height = 'auto' }: ImgProps) => {
  return <img className="custom-img" src={src} alt={alt} style={{ width, height }} />;
};

export default Img;
