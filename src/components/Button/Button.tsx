import React from 'react';
import './Button.css';

interface ButtonProps {
  label: string;
  onClick?: () => void; // ✅ Allow onClick prop
}

const Button = ({ label, onClick }: ButtonProps) => {
  return <button onClick={onClick}>{label}</button>;
};

export default Button;

// testing 