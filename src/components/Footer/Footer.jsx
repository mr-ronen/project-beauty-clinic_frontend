import React, { useState } from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";
import photo from "../../assets/images/footer-photo.png";
import emailjs from "emailjs-com";

const Footer = () => {
  const [callbackDetails, setCallbackDetails] = useState({
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCallbackDetails({ ...callbackDetails, [name]: value });
  };

  const handleCallbackSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_ffeea3n",
        "template_xcve8qf",
        callbackDetails,
        "KnsmAfchYnvFEkAP4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSubmitted(true);
          // Reset the form fields
          setCallbackDetails({
            name: "",
            phone: "",
            email: "",
          });
          // Optionally set a timeout to hide the message after some time
          setTimeout(() => {
            setSubmitted(false);
          }, 5000);
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logo} alt="Logo" className="footer-logo" />
        <div className="footer-info">
          <h4>?מתעניינת בקורס / השתלמות </h4>
          <p>
            {" "}
            .רוצה לשמוע פרטים נוספים? מלאי את הפרטים בטופס המצורף ונחזור אליכם
          </p>
          <div className="footer-content">
            {submitted && (
              <p className="success-message">Message sent successfully!</p>
            )}
            <form onSubmit={handleCallbackSubmit}>
              
              <input
                type="text"
                name="name"
                placeholder=":שם"
                onChange={handleInputChange}
                value={callbackDetails.name}
              />
              <label htmlFor="name">:שם</label>
              
              <input
                type="tel"
                name="phone"
                placeholder=":מספר טלפון"
                onChange={handleInputChange}
                value={callbackDetails.phone}
              />
              <label htmlFor="phone">:מספר טלפון</label>
              
              <input
                type="email"
                name="email"
                placeholder=":אימייל"
                onChange={handleInputChange}
                value={callbackDetails.email}
              />
              <label htmlFor="email">:אימייל</label>
              <button type="submit">שלח</button>
            </form>
          </div>
        </div>
        <img src={photo} alt="Footer Visual" className="footer-photo" />
      </div>
      <div className="footer-bottom">
        <p className="creator-text">Created by Ronen Iosifov 2023</p>
        <div className="footer-links">
          <a href="/Terms">תקנון האתר</a> <a href="/Shipping">משלוחים</a>
          <a href="/Service">החלפות החזרות</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
