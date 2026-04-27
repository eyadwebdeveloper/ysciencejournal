import React from "react";
import { Link } from "react-router-dom";

function ApplicationComponent() {
  return (
    <React.Fragment>
      <div className="info-container">
        <h1>IFYR Application has been closed</h1>
        <div className="navigates">
          <Link to="/">Back to home</Link>
          <Link to="/IFYR">Back to competition page</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ApplicationComponent;
