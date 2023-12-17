import React, { useState, useEffect, useRef } from "react";
import "./Navigation.css";
import Menubar from "../../assets/images/Menu.png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false); // Close the nav if click is outside
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener on component unmount
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
            <a href="/treatments">טיפולים</a>
          </li>
          <li>
            <a href="/courses">קורסים </a>
          </li>
          <li>
            <a href="/shop">חנות</a>
          </li>

          <li>
            <a href="/About">צור קשר</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navigation;
