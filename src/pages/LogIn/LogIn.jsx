import React, { useState, useEffect } from "react";
import {useSelector, useDispatch } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
import Header from "../../components/Header/Header";

const LogIn = () => {
  const [credential, setCredential] = useState(""); // Can be username or email
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    // This will log the user object every time it changes
    console.log("Logged in user:", user);
  }, [user]);
  
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!credential || !password) {
      setError("Please enter both username and password");
      return;
    }
    try {
      await dispatch(login({ username: credential, password })).unwrap();
      navigate("/");
    } catch (rejectedValueOrSerializedError) {
      setError(
        "Login attempt unsuccessful. Please check your credentials and try again."
      );
    }
  };

  return (
    <div className="login-container">
      <Header />
      <div className="login-card">
        <h2>Welcome!</h2>
        <p className="invitation">Log in by entering the information below.</p>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="login-button">
            Log In
          </button>
          <p
            className="signup-link"
            onClick={() => navigate("/UserRegistration")}
          >
            Don't have an account? Sign up
          </p>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
