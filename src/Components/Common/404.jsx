import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <React.Fragment>
      <div className="not-found">
        <h1 className="title">We are sorry, page not found</h1>
        <p>
          The page you are looking for might have been removed, had its name
          changed or its temporarily unavailable
        </p>
        <Link to={"./"}>Back to homepage</Link>
        <h1 className="fof">404</h1>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
