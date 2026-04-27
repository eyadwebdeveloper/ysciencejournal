import React from "react";
import { Helmet } from "react-helmet";
import HeroComponent from "../Components/Home/HeroComponent";
import BlackBoxComponent from "../Components/Home/BlackBoxComponent";
import TeamComponent from "../Components/Home/TeamComponent";
import MissionComponent from "../Components/Home/MissionComponent";

function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Home ● YSJ</title>
        <meta
          name="description"
          content="An initiative by STEM October's class of 2022, Youth Science Journal is the first Egyptian scientific journal published by high school students, for high school students."
        />
        <meta
          name="keywords"
          content="ysj, YSJ, youth science journal, high school journal, journal, papers, research"
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
        <link rel="canonical" href="https://ys-journal.org" />
      </Helmet>
      <HeroComponent />
      <BlackBoxComponent />
      <TeamComponent />
      <MissionComponent />
    </React.Fragment>
  );
}

export default HomePage;
