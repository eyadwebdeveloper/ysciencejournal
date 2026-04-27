import React from "react";
import LandingImg from "../../images/landing.jpg";

function HeroComponent() {
  return (
    <React.Fragment>
      <section className="program-hero">
        <div className="content">
          <h1>Welcome to YSJ Annual Junior Program</h1>
          <p>
            Where High school students embark on an 10-week intensive journey
            through the margins of scientific research. Throughout this span,
            juniors work with experienced senior researchers to conduct their
            own research studies. After that, they are offered the opportunity
            to have their papers published in our journal.
          </p>
          <a
            href="https://juniorapp.ys-journal.org"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Juniors Application
          </a>
        </div>
        <img src={LandingImg} alt="" className="landing-img" />
      </section>
    </React.Fragment>
  );
}

export default HeroComponent;
