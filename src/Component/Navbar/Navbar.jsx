import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/R.png";
import { Link } from "react-scroll";

function Navbar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "nav1" : ""}`}>
      <Link to="hero"><img src={logo} alt="" className="NavLog" /></Link>
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link to="hero" smooth={true} offset={0} duration={400}>
            Home
          </Link>
        </li>{" "}
        {/* I used here react-scroll */}
        <li>
          <Link to="program" smooth={true} offset={-260} duration={400}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-150} duration={400}>
            About us
          </Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-260} duration={400}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonial" smooth={true} offset={-260} duration={400}>
            Testimonials
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={0}
            duration={400}
            className="btn"
          >
            Contact us
          </Link>
        </li>
      </ul>
      <i className="bx bx-menu menu-icon" onClick={toggleMenu}></i>
    </nav>
  );
}

export default Navbar;
