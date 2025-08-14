import React from "react";

type CardProps = {
  title: string;
  description?: string; // ✅ For your Resources section
  content?: string;     // ✅ For your Work / Aspirational Role section
  footer?: string;
  url?: string;         // ✅ So you can link the whole card
};

const Card = ({ title, description, content, footer, url }: CardProps) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {content && <p>{content}</p>}
      {footer && <small>{footer}</small>}
      {url && (
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Visit Link
          </a>
        </p>
      )}
    </div>
  );
};

export default Card;
