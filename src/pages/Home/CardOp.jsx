import React from "react";
import "./Card.css"; 
import { useNavigate } from "react-router-dom";

const OpCard = ({ title, description, buttonText, imageUrl }) => {

  const navigate = useNavigate(); 
  const navigateToCourses = () => {
    navigate('/Courses'); // Use navigate to change the route
  };

  return (
    <div className="card">
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button className="card-button" onClick={navigateToCourses}>לפרטים נוספים</button>
      </div>
      <div className="card-image-container">
        <img src={imageUrl} alt="Card visual" className="card-image" />
      </div>
    </div>
  );
};

export default OpCard;
