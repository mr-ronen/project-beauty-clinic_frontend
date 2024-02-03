import React, { useState, useEffect, useRef } from "react";
import "./AdminNav.css";
import Menubar from "../../assets/images/Menu.png";

const AdminNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();

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
          <h2>ניהול</h2>
          <li>
            <a href="/UsersManagement"> משתמשים </a>
          </li>
          <li>
            <a href="/ShopManagement">עריכת חנות </a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default AdminNav;
