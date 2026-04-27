import React from "react";
import { Link } from "react-router-dom";

function PublishComponent() {
  return (
    <React.Fragment>
      <section className="publish-section">
        <div className="content">
          <h2>Publication is open!</h2>
          <p>
            Having your paper published in YSJ resembles a quality certification
            and reveals its commitment to the journal’s rigorous standards,
            adding more credibility to your work. As soon as your research
            article becomes visible on our website, the journal takes over the
            mission of communicating it with peers across the globe.
          </p>
          <Link to="https://issues.ys-journal.org/index.php/ysj/submission">
            Access Portal <i className="fa-solid fa-location-arrow"></i>
          </Link>
        </div>
      </section>
    </React.Fragment>
  );
}

export default PublishComponent;
