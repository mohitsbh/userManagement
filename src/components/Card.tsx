import React from 'react';
import './Card.css';

interface CardProps {
  title: string;
  value: number | string;
  icon?: React.ReactNode; // Optional: Allows adding an icon
  backgroundColor?: string; // Optional: To customize the card background
}

const Card: React.FC<CardProps> = ({ title, value, icon, backgroundColor }) => {
  return (
    <div className="card-container" style={{ backgroundColor: backgroundColor || '#ffffff' }}>
      <div className="card-icon">{icon}</div>
      <div className="card-details">
        <h3 className="card-title">{title}</h3>
        <p className="card-value">{value}</p>
      </div>
    </div>
  );
};

export { Card };
