import React from 'react';
import './Text.css';

interface TextProps {
  content: string;
}

const Text = ({ content }: TextProps) => {
  return <p>{content}</p>;
};

export default Text;
