import "./HeaderAdmin.css";
import React, { useState, useEffect } from "react";
import Carticon from "../../assets/images/L-icon.png";
import logo from "../../assets/images/logo.png";
import AdminNav from "../AdminNav/AdminNav";

const HeaderAdmin = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <a href="/Home">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <nav>
        <ul>
          <li>
            <a href="/UsersManagement"> משתמשים </a>
          </li>
          <li>
            <a href="/ShopManagement">עריכת חנות </a>
          </li>
          <li>
            <a href="/About">צור קשר</a>
          </li>
          <li>
            <a href="/shop">חנות</a>
          </li>

          <li>
            <a href="/courses">קורסים</a>
          </li>
        </ul>
      </nav>
      <a href="/Cart">
        <img src={Carticon} alt="Cart" className="cart-icon" />
      </a>
      <AdminNav />
    </header>
  );
};

export default HeaderAdmin;
