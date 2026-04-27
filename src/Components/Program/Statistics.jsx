import React, { useEffect } from "react";

function StatisticsComponent() {
  useEffect(() => {
    const counters = document.querySelectorAll(".count");

    const countUp = (counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const increment = Math.ceil(target / 100); // Increment value for smoother animation

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.textContent = count;
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target; // Ensure it ends at the target value
        }
      };

      updateCount();
    };

    counters.forEach((counter) => {
      countUp(counter);
    });
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <React.Fragment>
      <section className="statistics">
        <div className="statistics-wrapper">
          <div className="row">
            <div className="statistic">
              <h3 className="count" data-target="37">
                0
              </h3>
              <p>Countries</p>
            </div>
            <div className="statistic">
              <h3 className="count" data-target="530">
                0
              </h3>
              <p>Trained juniors</p>
            </div>
            <div className="statistic">
              <h3 className="count" data-target="20">
                0
              </h3>
              <p>Top university placement</p>
            </div>
          </div>
          <div className="row">
            <div className="statistic">
              <h3 className="count" data-target="120">
                0
              </h3>
              <p>Published papers</p>
            </div>
            <div className="statistic">
              <h3 className="count" data-target="170">
                0
              </h3>
              <p>Represented schools</p>
            </div>
            <div className="statistic">
              <h3 className="count" data-target="6">
                0
              </h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default StatisticsComponent;
