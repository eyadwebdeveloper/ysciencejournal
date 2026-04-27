import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import YSJLogo from "../../images/YSJ-Logo.png";
import Palestine from "../../images/Palestine.png";

function AnnouncmentHeader() {
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const header = document.querySelector(".header");

    const toggleMenu = () => {
      if (nav && toggle) {
        // Add show-menu class to nav menu
        nav.classList.toggle("show-menu");

        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle("show-icon");
      }
    };

    if (toggle && nav) {
      toggle.addEventListener("click", toggleMenu);
    }

    const handleScroll = () => {
      if (header) {
        if (window.scrollY > 0) {
          header.classList.add("shadow");
        } else {
          header.classList.remove("shadow");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listeners
    return () => {
      if (toggle) {
        toggle.removeEventListener("click", toggleMenu);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Function to determine if a link is active
  const getLinkClass = (path) => {
    return location.pathname === path ? "nav__link active-page" : "nav__link";
  };

  return (
    <React.Fragment>
      <header className="header">
        <nav className="nav container">
          <div className="nav-data">
            <Link to="/" className="nav__logo">
              <img src={YSJLogo} alt="YSJ-LOGO" />
              <img src={Palestine} alt="FREE-PALESTINE" />
            </Link>
            <div className="nav__toggle" id="nav-toggle">
              <i className="fa-solid fa-bars nav__burger"></i>
              <i className="fa-solid fa-xmark nav__close"></i>
            </div>
          </div>

          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li>
                <Link to="/" className={getLinkClass("/")}>
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="https://issues.ys-journal.org"
                  className={getLinkClass("/Issues")}
                >
                  Issues
                </a>
              </li>
              <li>
                <Link to="/Program" className={getLinkClass("/Program")}>
                  Program
                </Link>
              </li>
              <li>
                <Link to="/Contact" className={getLinkClass("/Contact")}>
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/IFYR" className={getLinkClass("/IFYR")}>
                  IFYR
                </Link>
              </li>
              <li>
                <Link to="/Publish" className={getLinkClass("/Publish")}>
                  Publish
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="announcment">
          <p>
            IFYR Submittions for the 2024 season are open!{" "}
            <a href="">Apply now</a>
          </p>
        </div>
      </header>
    </React.Fragment>
  );
}

export default AnnouncmentHeader;
