import React from "react";

function HeroComponent() {
  return (
    <React.Fragment>
      <section className="publish-hero">
        <div className="content">
          <div className="row">
            <h1>
              We are open for <br /> submission!
            </h1>
          </div>
          <div className="row">
            <p>
              Any High School student or undergraduate is highly encouraged to
              submit their work onto the journal. We accept submissions on any
              STEM (Science, Technology, Engineering and Maths) topic that has
              not been published before. The publishing and editing process is
              all FREE of charge and will not cost you a penny.
            </p>
            <p>
              Be aware that to make sure all the released articles on the
              journal is professional, the articles are subjected to editing
              stages where the editors will proofread your article to help build
              up your article to the highest quality possible.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroComponent;
