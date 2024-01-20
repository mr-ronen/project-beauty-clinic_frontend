import React, { useState, useEffect } from "react";
import "./Header.css";
import Carticon from "../../assets/images/L-icon.png";
import logo from "../../assets/images/logo.png";
import Navigation from "../Navigation/Navigation";

const Header = () => {
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
            <a href="/About">צור קשר</a>
          </li>
          <li>
            <a href="/shop">חנות</a>
          </li>

          <li>
            <a href="/courses">קורסים</a>
            <ul className="dropdown">
              <li>
                <a href="/courses/brows">קורס גבות</a>
              </li>
              <li>
                <a href="/courses/lips">קורס שפתיים</a>
              </li>
              <li>
                <a href="/courses/eyeliner">קורס אייליינר</a>
              </li>
              <li>
                <a href="/courses/lash-lift">קורס הרמת ריסים</a>
              </li>
              <li>
                <a href="/courses/refresher-courses">השתלמויות</a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <a href="/Cart">
        <img src={Carticon} alt="Cart" className="cart-icon" />
      </a>
      <Navigation />
    </header>
  );
};

export default Header;
