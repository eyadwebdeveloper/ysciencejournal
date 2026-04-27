import React from "react";

function BlackBoxComponent() {
  return (
    <React.Fragment>
      <section className="body-txt">
        <div className="content">
          <div className="row-f">
            <h2>By the youth for the youth.</h2>
            <p>
              An initiative by STEM October’s className of 2022, Youth Science
              Journal is the first Egyptian scientific journal published by high
              school students, for high school students.
            </p>
          </div>
          <div className="row-s">
            <h2>Carefully tailored, thoroughly edited.</h2>
            <p>
              All issues go through extensive reviews and quality checks to make
              sure our content satisfies our high standards.
            </p>
          </div>
          <div className="row-f">
            <h2>Unmatched versatility, exceptional consistency.</h2>
            <p>
              Our journal presents issues on a monthly basis, each featuring a
              number of articles in any of a wide range of scientific fields,
              from neuroscience to mathematics.
            </p>
          </div>
          <div className="row-s">
            <h2>Supporting talents, fostering the talented.</h2>
            <p>
              Any high school student can submit a manuscript to be featured in
              one of our issues, provided it’s approved by our editors.
              Furthermore, they could become a writer for the journal if their
              submitted manuscript is deemed exceptional or otherwise through a
              regular application/interview process.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BlackBoxComponent;
