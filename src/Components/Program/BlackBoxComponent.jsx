import React from "react";

function BlackBoxComponent() {
  return (
    <React.Fragment>
      <section className="box">
        <div className="box-side">
          <h2>Junior</h2>
          <p>
            In YSJ, juniors are equipped with the assets to be eminent
            researchers. Assigned to experienced senior researchers, juniors
            boost their academic writing skills and step on the way of being
            adroit problem solvers. Along the program, they author their
            original research articles committed to the rigorous research
            principles and high academic standards. Subsequently, they refine
            their work getting constructive feedback from expert researchers.
          </p>
          <a
            href="https://juniorapp.ys-journal.org"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Apply now
          </a>
        </div>
        <div className="box-side">
          <h2>Senior</h2>
          <p>
            Seniors are skilled research mentors who advance the mission of YSJ.
            They take over the mission of simplifying research basics to junior
            researchers. As a senior researcher, you will get into a community
            of research enthusiasts. You will also have the opportunity to
            improve your research and mentorship skills. Undergraduates and high
            school students with previous research experience are encouraged to
            apply.
          </p>
          <a
            href="https://seniorapp.ys-journal.org"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            Applications are closed
          </a>
        </div>
      </section>
    </React.Fragment>
  );
}

export default BlackBoxComponent;
