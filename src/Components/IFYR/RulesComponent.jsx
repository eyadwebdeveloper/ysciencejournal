import React from "react";
import { Link } from "react-router-dom";

function RulesComponent() {
  return (
    <React.Fragment>
      <section className="fields">
        <div className="title">
          <hr />
          <h2>Rules & Guidlines</h2>
          <hr />
        </div>
        <div className="content">
          <div className="row">
            <div className="fields-card rule">
              <h3>Team Members</h3>
              <p>maximum: 5</p>
            </div>
            <div className="fields-card rule">
              <h3>Number of pages</h3>
              <p>maximum: 15</p>
            </div>
          </div>
        </div>
        <div className="red-box">
          <h2>Important Notes:</h2>
          <ul>
            <li>
              All papers must follow <Link to="/Publish">YSJ guidlines</Link>
            </li>
            <li>
              The use of Visuals & Illustrations (Figures, Graphs, Tables,
              etc...) is encouraged.
            </li>
          </ul>
          <h3>Eligibilty Criteria</h3>
          <ul>
            <li>Maximum team size: 5 members</li>
            <li>
              Team members are registered as undergraduate or high school
              students for the 2025 academic year
            </li>
            <li>
              Having a postgraduate student (senior researcher) as a supervisor
              is allowed. Note: the senior researcher is counted as a team
              member.
            </li>
            <li>Students from all nationalities can take part.</li>
            <li>The research paper must follow the YSJ guidelines.</li>
          </ul>
          <h3>
            BREAKING ANY OF THE FOLLOWING RULES CAN LEAD TO DISQUALIFICATION
          </h3>
          <ul>
            <li>Plagiarism</li>
            <li>
              Utilization of generative AI tools in writing (except for this,
              using AI tools is permittable)
            </li>
            <li>noncommitment to research ethics</li>
          </ul>
        </div>
      </section>
    </React.Fragment>
  );
}

export default RulesComponent;
