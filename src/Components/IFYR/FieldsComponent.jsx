import React from "react";

function FieldsComponent() {
  return (
    <React.Fragment>
      <section className="fields">
        <div className="title">
          <hr />
          <h2>Fields</h2>
          <hr />
        </div>
        <div className="content">
          <div className="row">
            <div className="fields-card">
              <h3>Physics & Engineering</h3>
            </div>
            <div className="fields-card">
              <h3>Chemistry</h3>
            </div>
            <div className="fields-card">
              <h3>Biology</h3>
            </div>
            <div className="fields-card">
              <h3>Mathematics</h3>
            </div>
            <div className="fields-card">
              <h3>Astronomy & Astrophysics</h3>
            </div>
          </div>
          <div className="row">
            <div className="fields-card">
              <h3>Neuroscience & Psychology</h3>
            </div>
            <div className="fields-card">
              <h3>Social sciences</h3>
            </div>
            <div className="fields-card">
              <h3>Business</h3>
            </div>
            <div className="fields-card">
              <h3>Environmental sciences</h3>
            </div>
            <div className="fields-card">
              <h3>Computer Science</h3>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default FieldsComponent;
