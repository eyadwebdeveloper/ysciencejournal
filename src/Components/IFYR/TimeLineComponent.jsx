import React from "react";

function TimeLineComponent() {
  return (
    <React.Fragment>
      <section className="timeline ifyr-timeline">
        <div className="info">
          <h2>Competition timeline</h2>
          <p>Presenting the important events througout the season</p>
          <p></p>
        </div>

        <ol>
          <li>
            <div>
              <time>
                November 5<sup>th</sup>
              </time>{" "}
              IFYR registration commences. Teams who haven’t completed their
              project can seek technical assistance from our research
              administrators on the competition discord.
            </div>
          </li>
          <li>
            <div>
              <time>
                December 26<sup>th</sup>
              </time>{" "}
              IFYR registration closes. All participating teams must submit
              their research articles by this date.
            </div>
          </li>
          <li>
            <div>
              <time>
                January 6<sup>th</sup>
              </time>{" "}
              Round one results are out. Qualifiers are asked to submit
              presentations and are informed with the second round details.
            </div>
          </li>
          <li>
            <div>
              <time>
                January 10<sup>th</sup>
              </time>{" "}
              IFYR's second round is held. Qualified research articles are
              appraised by experienced judicators.
            </div>
          </li>
          <li>
            <div>
              <time>
                January 15<sup>th</sup>
              </time>{" "}
              Announcing IFYR winners. All finalist teams receive a
              comprehensive report of their rank and performance.
            </div>
          </li>

          <li></li>
        </ol>
      </section>
    </React.Fragment>
  );
}

export default TimeLineComponent;
