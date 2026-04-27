import React from "react";
import Img1 from "../../images/1.png";
import Img2 from "../../images/2.png";
import Img3 from "../../images/3.png";
import Img4 from "../../images/4.png";

function CriteriaComponent() {
  return (
    <React.Fragment>
      <section className="criteria">
        <div className="content">
          <h2>Publication Criteria</h2>
          <div className="row">
            <div className="criteria-card">
              <div className="img">
                <img src={Img1} alt="" />
              </div>
              <p>
                Make sure the writing style of your submission is up-to-par and
                proofread it multiple times
              </p>
            </div>
            <div className="criteria-card">
              <div className="img">
                <img src={Img2} alt="" />
              </div>
              <p>
                The article should be formatted in the YSJ format and follow our
                guidelines accordingly. Any failure to do so could result in
                your article being rejected for publication
              </p>
            </div>
            <div className="criteria-card">
              <div className="img">
                <img src={Img3} alt="" />
              </div>
              <p>
                You are responsible for responding swiftly to comments and edits
                done by the supervising editors
              </p>
            </div>
            <div className="criteria-card">
              <div className="img">
                <img src={Img4} alt="" />
              </div>
              <p>
                YSJ does not accept plagiarism in any form and takes it very
                seriously. If any plagiarism is detected in your submission,
                strict action shall be taken
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default CriteriaComponent;
