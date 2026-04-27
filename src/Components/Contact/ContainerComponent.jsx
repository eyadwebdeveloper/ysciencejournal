import React from "react";

function ContainerComponent() {
  return (
    <React.Fragment>
      <div id="section-wrapper">
        <div className="box-wrapper">
          <div className="info-wrap">
            <h2 className="info-title">Contact Information</h2>
            <h3 className="info-sub-title">
              Provide your contact info and we will reach out to you as soon as
              possible!
            </h3>
            <ul className="info-details">
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>Phone:</span>{" "}
                <a href="tel:+201102432367">+ 201 102 432 367</a>
              </li>
              <li>
                <i className="fas fa-paper-plane"></i>
                <span>Email:</span>{" "}
                <a href="mailto:iynaoctchapter@gmail.com">
                  ysciencejournal@gmail.com
                </a>
              </li>
              <li>
                <i className="fas fa-globe"></i>
                <span>Website:</span>{" "}
                <a href="https://www.ys-journal.org">www.ys-journal.org</a>
              </li>
            </ul>
          </div>
          <div className="form-wrap">
            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="590764f7-9b6b-48f2-b447-db0ab8b9d256"
              />
              <h2 className="form-title">Send us a message</h2>
              <div className="form-fields">
                <div className="form-group">
                  <input
                    type="text"
                    name="First name"
                    className="fname"
                    placeholder="First Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="Last name"
                    className="lname"
                    placeholder="Last Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="Email Address"
                    className="email"
                    placeholder="Email address"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="Phone number"
                    className="phone"
                    placeholder="Phone nmber"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="Message"
                    placeholder="Write your message"
                  ></textarea>
                </div>
              </div>
              <input
                type="submit"
                value="Send Message"
                className="submit-button"
              />
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContainerComponent;
