import React from "react";
import LogoRev from "../../images/Logo-rev.png";

function FooterComponent() {
  return (
    <React.Fragment>
      <footer>
        <div className="content">
          <div className="footer-left">
            <img src={LogoRev} alt="YSJ-LOGO" />
            <h2>Contact Us</h2>
            <p>
              Reach to us about ideas, suggestion or any questions you have!
            </p>
            <h6>© 2020-2025 All Rights reserved | Youth Science Journal</h6>
          </div>
          <div className="footer-right">
            <h2>
              <strong>Website Managers: </strong><a href="https://eyad.tech" style={{color: "white", textDecoration: "underline"}}>Eyad Ashraf</a> | Nour | Yassin
              Saad
            </h2>
            <div className="socials">
              <a
                href="https://www.facebook.com/YouthScienceJournall"
                className="social"
              >
                <i className="fa-brands fa-facebook"></i>Facebook
              </a>
              <a
                href="https://www.instagram.com/ysciencejournal"
                className="social"
              >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
              <a
                href="https://www.linkedin.com/company/ysj/"
                className="social"
              >
                <i className="fa-brands fa-linkedin"></i>Linkedin
              </a>
            </div>
            <h6 className="copy">
              © 2020-2026 All Rights reserved | Youth Science Journal
            </h6>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default FooterComponent;
