import React from "react";

import Icon1 from "../../images/icon1.png";
import Icon2 from "../../images/icon2.png";
import Icon3 from "../../images/icon3.png";
import Icon4 from "../../images/icon4.png";

function FeaturesComponent() {
  return (
    <React.Fragment>
      <section className="features">
        <div className="content">
          <div className="row">
            <h1>Why publish with us?</h1>
          </div>
          <div className="row">
            <div className="features-card">
              <div className="icon">
                <p>01</p>
                <img src={Icon1} alt="" />
              </div>
              <h3>Delve deeper into your own STEM field of interest</h3>
            </div>
            <div className="features-card">
              <div className="icon">
                <p>02</p>
                <img src={Icon2} alt="" />
              </div>
              <h3>Gain experience in academic writing</h3>
            </div>
          </div>
          <div className="row">
            <div className="features-card">
              <div className="icon">
                <p>03</p>
                <img src={Icon3} alt="" />
              </div>
              <h3>Learn the basics of scientific research</h3>
            </div>
            <div className="features-card">
              <div className="icon">
                <p>04</p>
                <img src={Icon4} alt="" />
              </div>
              <h3>hare awareness about your topic</h3>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FeaturesComponent;
