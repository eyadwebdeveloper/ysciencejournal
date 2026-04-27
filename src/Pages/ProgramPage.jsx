import React from "react";
import { Helmet } from "react-helmet";
import HeroComponent from "../Components/Program/HeroComponent";
import BlackBoxComponent from "../Components/Program/BlackBoxComponent";
import TimeLineComponent from "../Components/Program/TimeLineComponent";
import StatisticsComponent from "../Components/Program/Statistics";

function ProgramPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Program ● YSJ</title>
        <meta
          name="description"
          content="Join the YSJ Research Program for high school juniors! Engage in an 8-week intensive research experience, work with senior researchers, and get a chance to publish your findings in the YSJ journal."
        />
        <meta
          name="keywords"
          content="YSJ Research Program, high school research program, research opportunities for high school students, scientific research, publish research paper, mentorship, junior researchers, summer research program, research experience, high school juniors"
        />
        <link rel="icon" href="../images/Logo.png" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../images/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../images/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../images/favicon/favicon-16x16.png"
        />
        <link rel="canonical" href="https://ys-journal.org/Program" />
      </Helmet>
      <HeroComponent />
      <BlackBoxComponent />
      <TimeLineComponent />
      <StatisticsComponent />
    </React.Fragment>
  );
}

export default ProgramPage;
