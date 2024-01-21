import React from "react";
import "./DetailsCard.css";

const Card = ({imageUrl , description, title }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="card-image">
        <img src={imageUrl} alt="Card" />
      </div>
    </div>
  );
};

export default Card;
