import React from "react";

function GuidelinesComponent() {
  const researchPaperUrl = "/new guidelines for research paper.docx"; // Path to your file in public
  const researchPaperName = "new guidelines for research paper.docx"; // Desired file name

  const reviewPaperUrl = "/new guidelines for review paper.docx"; // Path to your file in public
  const reviewPaperName = "new guidelines for review paper.docx"; // Desired file name

  const latexPaperUrl = "/The Journal Guidelines_LaTeX.zip"; // Path to your file in public
  const latexPaperName = "The Journal Guidelines_LaTeX.zip"; // Desired file name

  return (
    <React.Fragment>
      <section className="warning" id="guidelines">
        <div className="content">
          <h2>
            <i className="fa-solid fa-circle-exclamation"></i> Publication
            Guidelines
          </h2>
          <div>
            <p>
              This is the format for the Youth Science Journal’s articles. Make
              sure that you follow the format in writing your article and that
              it covers every point in the format. Any strong deviations from
              our format will lead that your article is immediately rejected
              from publication and will have to be reformatted into our format.
              Any questions about the format, feel free to contact us at{" "}
              <a href="mailto:ysciencejournal@gmail.com">
                ysciencejournal@gmail.com
              </a>
            </p>
            <div className="links">
              <a href={researchPaperUrl} download={researchPaperName}>
                Check our Guidelines for research paper{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={reviewPaperUrl} download={reviewPaperName}>
                Check our Guidelines for review paper{" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a href={latexPaperUrl} download={latexPaperName}>
                Check our Guidelines (LaTeX){" "}
                <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default GuidelinesComponent;
