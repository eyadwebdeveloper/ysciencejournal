import React from "react";

function HeroComponent() {
  return (
    <React.Fragment>
      <section className="faq-container">
        <div className="title">
          <hr />
          <h2>Frequently Asked Questions</h2>
          <hr />
        </div>
        <div className="accordion">
          <div className="accordion-item">
            <button id="accordion-button-1" aria-expanded="false">
              <span className="accordion-title">
                - Can I register if I am still working on my research paper?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                In case you have a project idea but haven’t yet completed the
                entire project, you can follow the following procedures to
                register: fill in the application and choose the option “no” in
                the question “upload paper now”. After applying, you will find
                the competition discord where you can seek technical support.
                However, you are supposed to upload your paper on the
                application portal by the registration deadline.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-2" aria-expanded="false">
              <span className="accordion-title">
                - What is the first-round system?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                In the first round, all the submitted articles are reviewed by
                the journal editors, and the best research articles are
                qualified to the second round. Carefully deliberated aspects
                include research originality, academic writing, as well as the
                commitment to research ethics.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <button id="accordion-button-3" aria-expanded="false">
              <span className="accordion-title">
                - What happens to the first-round qualifiers?
              </span>
              <span className="icon" aria-hidden="true"></span>
            </button>
            <div className="accordion-content">
              <p>
                Qualifiers go on to the second, and the last, round, where they
                have a 15-minute presentation in the presence of a judicator,
                highlighting the novel and most important aspects of their
                research. Before the second round, each team is asked to submit
                a presentation. The top three teams in each field are announced
                as winners.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroComponent;
