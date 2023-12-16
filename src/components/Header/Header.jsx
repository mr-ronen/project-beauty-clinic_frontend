import React, { useState, useEffect } from "react";
import "./Header.css";
import Carticon from "../../assets/images/L-icon.png"; // Replace with your cart icon path
import logo from "../../assets/images/logo.png";
//import HamburgerIcon from "../../assets/images/hamburger-icon.png"; // Add your hamburger icon


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);


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
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <a href="/contact">צור קשר</a>
          </li>
          <li>
            <a href="/shop">חנות</a>
          </li>
          <li>
            <a href="/treatments">טיפולים</a>
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
      <img src={Carticon} alt="Logo" className="cart-icon" />
    </header>
  );
};

export default Header;
