import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./About.css";
import React, { useState } from "react";
import emailjs from "emailjs-com";

const About = () => {
  const [contactDetails, setContactDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submissionMessage, setSubmissionMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ffeea3n",
        "template_5e7irff",
        contactDetails,
        "KnsmAfchYnvFEkAP4"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setContactDetails({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          }); // Clear the form
          setSubmissionMessage("Your message was sent successfully!");
          setTimeout(() => setSubmissionMessage(""), 5000); // Hide the message after 5 seconds
        },
        (err) => {
          console.log("FAILED...", err);
          setSubmissionMessage(
            "Failed to send the message. Please try again later."
          );
          setTimeout(() => setSubmissionMessage(""), 5000); // Hide the message after 5 seconds
        }
      );
    // Clear form after submission or handle the promise resolution as you see fit
  };

  return (
    <div>
      <Header />
      <br /> <br />
      <br />
      <div className="about-header">
        <h1 className="about-title">Contact Us</h1>
        <p className="about-intro">
          For all order support, please include your order number and date that
          your order was placed.
        </p>
      </div>
      <div className="contact-container">
        {submissionMessage && (
          <div className="submission-message">{submissionMessage}</div>
        )}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            placeholder="Enter Your First Name"
            onChange={handleChange}
            value={contactDetails.firstName}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Enter Your Last Name"
            onChange={handleChange}
            value={contactDetails.lastName}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={handleChange}
            value={contactDetails.email}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Phone"
            onChange={handleChange}
            value={contactDetails.phone}
          />
          <textarea
            name="message"
            placeholder="Enter Your Message Here"
            onChange={handleChange}
            value={contactDetails.message}
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default About;
