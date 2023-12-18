import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png"; 
import photo from "../../assets/images/footer-photo.png"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-info">
          <h4>?מתעניינת בקורס / השתלמות  </h4>
          <p>רוצה לשמוע פרטים נוספים מלאי את הפרטים בטופס המצורף</p>
          <button type="button">שלח</button>

          <input type="text" placeholder=":שם" />
          <input type="tel" placeholder=":מספר טלפון" />
          <input type="email" placeholder=":אימייל" />
        </div>
        <img src={photo} alt="Footer Visual" className="footer-photo" />
      </div>
      <div className="footer-bottom">
        <p className="creator-text">Created by Ronen Iosifov 2023</p>
        <div className="footer-links">
          <a href="/terms">תקנון האתר</a> |<a href="/shipping">משלוחים</a> |
          <a href="/returns">החלפות החזרות</a>
        </div>
        </div>
    </footer>
  );
};

export default Footer;
