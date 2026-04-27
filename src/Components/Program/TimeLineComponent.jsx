import React, { useEffect } from "react";

function TimeLineComponent() {
  useEffect(() => {
    // Select all timeline elements
    const elH = document.querySelectorAll(".timeline li > div");

    // Function to set equal heights
    const setEqualHeights = (el) => {
      let counter = 0;
      for (let i = 0; i < el.length; i++) {
        const singleHeight = el[i].offsetHeight;

        if (counter < singleHeight) {
          counter = singleHeight;
        }
      }

      for (let i = 0; i < el.length; i++) {
        el[i].style.height = `${counter}px`;
      }
    };

    // Initialize heights when the window loads
    const init = () => {
      setEqualHeights(elH);
    };

    window.addEventListener("load", init);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener("load", init);
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <React.Fragment>
      <section className="timeline program-timeline">
        <div className="info">
          <h2>Program timeline</h2>
          <p>Presenting the program's important events througout the season</p>
          <p></p>
        </div>

        <ol>
          <li>
            <div>
              <time>The Beginning of August</time> Our program commences.
              Juniors have their first session with their mentor to break the
              ice and start their research journey.
            </div>
          </li>
          <li>
            <div>
              <time>The end of August</time> Research sessions officially end.
              After that, Juniors can still hold individual sessions with their
              mentors to discuss their progress and ask for help.
            </div>
          </li>
          <li>
            <div>
              <time>20th of September</time> The program comes to end. Juniors
              submit the final version of their research papers. After peer
              review and modifications, high-quality papers are given the
              opportunity of publication in our journal
            </div>
          </li>
          <li>
            <div>
              <time>25th of September</time> It is time for the evaluation day.
              Juniors present their accomplished work throughout the program.
              Their work is evaluated according to our rubric and they get their
              final grades.
            </div>
          </li>
          <li></li>
        </ol>
      </section>
    </React.Fragment>
  );
}

export default TimeLineComponent;
