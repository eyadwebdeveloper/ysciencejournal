import React from "react";

function LoadingComponent({ style }) {
  return (
    <section className="loading" style={style}>
      <div className="loader">
        <span>Loading...</span>
      </div>
    </section>
  );
}

export default LoadingComponent;
