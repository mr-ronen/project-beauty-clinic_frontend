import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./UserRegistration.css";
import Header from "../../components/Header/Header";

const UserRegistration = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [validationMessage, setValidationMessage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validateForm = () => {
    if (!username) return "Please enter a username.";
    if (!/^[a-zA-Z0-9_]+$/.test(username))
      return "Your username should only contain letters, numbers, and underscores.";
    if (!fullName) return "Please enter your full name.";
    if (!/^[a-zA-Z ]+$/.test(fullName))
      return "Full name must contain only letters and spaces.";
    if (!email) return "Please enter an email address.";
    if (!/\S+@\S+\.\S+/.test(email))
      return "Please enter a valid email address.";
    if (!password) return "Please enter a password.";
    if (password.length < 6)
      return "Password must be at least 6 characters long with at least 1 number.";
    if (!/\d/.test(password))
      return "Password must contain at least one digit.";
    return "";
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationMsg = validateForm();
    if (validationMsg) {
      setValidationMessage(validationMsg);
      return;
    }
    try {
      await dispatch(
        register({ username, email, password, fullName })
      ).unwrap();
      navigate("/login");
    } catch (rejectedValueOrSerializedError) {
      setValidationMessage(
        rejectedValueOrSerializedError.message || "Registration failed"
      );
    }
  };

  return (
    <div className="user-registration-container">
      <Header />
    
      <div className="registration-card">
        <h2>Register</h2>
        <p className="invitation">
          Register to benefit from our shop's exclusive deals!
        </p>
        <form onSubmit={handleSubmit} className="registration-form">
          <label htmlFor="Username">Username</label>
          <div className="input-group-reg">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <label htmlFor="FullName">Full Name</label>
          <div className="input-group-reg">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <label htmlFor="Email">Email</label>
          <div className="input-group-reg">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <label htmlFor="Password">Password</label>
          <div className="input-group-reg">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {validationMessage && (
            <p className="error-message">{validationMessage}</p>
          )}
          <button type="submit" className="submit-button">
            Register
          </button>
          <p className="login-link" onClick={() => navigate("/logIn")}>
            Already have an account? Log in
          </p>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration;
