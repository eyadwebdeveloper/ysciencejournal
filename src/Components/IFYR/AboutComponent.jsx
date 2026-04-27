import React from "react";
import Logo from "../../images/IFYR-logo.jpg";

function AboutComponent() {
  return (
    <React.Fragment>
      <div className="title">
        <hr />
        <h2>About The Competition</h2>
        <hr />
      </div>
      <section className="about">
        <img src={Logo} alt="IFYR Logo" />
        <p>
          Advancing our mission, YSJ presents IFYR (the International Fair of
          Youth Researchers). IFYR is a rigorous research competition aimed at
          bringing Commendable discoveries to light. In IFYR, students present
          their research work in front of a committee of seasoned researchers.
          The competition represents the ideal opportunity to innovate, follow
          your insatiable curiosity, and delve into the realms of science.
          Highlighting innovative projects, IFYR envisions making an impact and
          contributing to tackling world-pressing challenges. This initiative
          was designed to expand the boundaries of scientific discovery.
        </p>
      </section>
    </React.Fragment>
  );
}

export default AboutComponent;
