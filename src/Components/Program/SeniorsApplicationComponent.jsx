import React from "react";
import { Link } from "react-router-dom";

function SeniorsApplicationComponent() {
  return (
    <React.Fragment>
      <div className="info-container">
        <h1>Seniors Application has been closed</h1>
        <div className="navigates">
          <Link to="/">Back to home</Link>
          <Link to="/Program">Back to program page</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SeniorsApplicationComponent;
