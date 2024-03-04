import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import Menubar from "../../assets/images/Menu.png";
import { logout } from "../../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    // Redirect to home page or show a message if needed
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

   

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <img src={Menubar} alt="Menu" className="hamburger-icon" />
      </button>
      <div ref={navRef} className={`nav ${isOpen ? "open" : "closed"}`}>
        <ul>
          <li>
            <a href="/courses">קורסים </a>
          </li>
          <li>
            <a href="/shop">חנות</a>
          </li>
          <li>
            <a href="/About">צור קשר</a>
          </li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="auth-button">התנתקות</button>
            </li>
          ) : (
            <li>
              <a href="/login" className="auth-button">התחברות</a> 
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
