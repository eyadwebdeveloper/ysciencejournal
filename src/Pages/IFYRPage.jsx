import React from "react";
import { Helmet } from "react-helmet";
import HeroComponent from "../Components/IFYR/HeroComponent";
import StatisticsComponent from "../Components/IFYR/StatisticsComponent";
import AboutComponent from "../Components/IFYR/AboutComponent";
import TimeLineComponent from "../Components/IFYR/TimeLineComponent";
import FieldsComponent from "../Components/IFYR/FieldsComponent";
import RulesComponent from "../Components/IFYR/RulesComponent";
import ApplyComponent from "../Components/IFYR/ApplyComponent";
import FaqComponent from "../Components/IFYR/FaqCompnent";

function IFYRPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>IFYR ● YSJ</title>
        <meta name="theme-color" content="#fa3347" />
        <meta
          name="description"
          content="Participate in the International Fair of Youth Researchers (IFYR)! A rigorous research competition for high school and undergraduate students to showcase their innovative projects and win prizes. Register now and submit your research!"
        />
        <meta
          name="keywords"
          content="IFYR, International Fair of Youth Researchers, research competition, high school research, undergraduate research, STEM competition, submit research, youth researchers, academic competition, scientific discovery, research awards"
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
        <link rel="canonical" href="https://ys-journal.org/IFYR" />
      </Helmet>
      <HeroComponent />
      <StatisticsComponent />
      <AboutComponent />
      <TimeLineComponent />
      <FieldsComponent />
      <RulesComponent />
      <FaqComponent />
      <ApplyComponent />
    </React.Fragment>
  );
}

export default IFYRPage;
