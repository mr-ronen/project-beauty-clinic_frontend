import React from 'react';
import './Card.css';

const Card = ({ title, description, buttonText, imageUrl }) => {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imageUrl} alt="Card visual" className="card-image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button">{buttonText}</button>
      </div>
      
    </div>
  );
};

export default Card;
