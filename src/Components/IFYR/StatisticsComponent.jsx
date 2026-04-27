import React from "react";

function StatisticsComponent() {
  return (
    <React.Fragment>
      <section className="ifyr-stats">
        <div className="title">
          <hr />
          <h2>IFYR in numbers (2024)</h2>
          <hr />
        </div>
        <p>
          IFYR is a community that gathers youth researchers universally,
          breaking geographic boundaries in scientific research. It represents a
          platform that fosters innovation, curiosity, and collaboration among
          students internationally.
        </p>
        <div className="ifyr-statistics">
          <div className="ifyr-statistic">
            <h2>170+</h2>
            <p>Team</p>
          </div>
          <div className="ifyr-statistic">
            <h2>21+</h2>
            <p>Countries</p>
          </div>
          <div className="ifyr-statistic">
            <h2>95+</h2>
            <p>Institution</p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default StatisticsComponent;
