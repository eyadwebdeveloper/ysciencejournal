import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import YSJLogo from "../../images/YSJ-Logo.png";
import Palestine from "../../images/Palestine.png";

function HeaderComponent() {
  const location = useLocation();

  useEffect(() => {
    const toggle = document.getElementById("nav-toggle");
    const nav = document.getElementById("nav-menu");
    const header = document.querySelector(".header");

    const toggleMenu = () => {
      if (nav && toggle) {
        nav.classList.toggle("show-menu");
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

    return () => {
      if (toggle) {
        toggle.removeEventListener("click", toggleMenu);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getLinkClass = (path) => {
    return location.pathname === path ? "nav__link active-page" : "nav__link";
  };

  // const closeAnnouncement = () => {
  //   setIsAnnouncementVisible(false);
  // };

  return (
    <React.Fragment>
      {/* {isAnnouncementVisible && (
        <div className="announcment">
          <p>
            IFYR Submittions for the 2025 season are open! <a href="https://forms.gle/Nmb5ATyYkS3mY8xK8">Apply now</a>
          </p>
          <i className="fa-solid fa-xmark" onClick={closeAnnouncement}></i>
        </div>
      )} */}
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
                <a href="https://issues.ys-journal.org" className={getLinkClass("/Issues")}>
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
      </header>
    </React.Fragment>
  );
}

export default HeaderComponent;
