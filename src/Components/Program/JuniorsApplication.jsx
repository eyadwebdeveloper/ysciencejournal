import React from "react";
import { Link } from "react-router-dom";

function JuniorsApplicationComponent() {
  return (
    <React.Fragment>
      <div className="info-container">
        <h1>Juniors Application has been closed</h1>
        <div className="navigates">
          <Link to="/">Back to home</Link>
          <Link to="/Program">Back to program page</Link>
        </div>
      </div>
    </React.Fragment>
  );
}

export default JuniorsApplicationComponent;
