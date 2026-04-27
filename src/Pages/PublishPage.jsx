import React from "react";
import { Helmet } from "react-helmet";
import HeroComponent from "../Components/Publish/HeroComponent";
import FeaturesComponent from "../Components/Publish/FeaturesComponent";
import CriteriaComponent from "../Components/Publish/CriteriaComponent";
import GuidelinesComponent from "../Components/Publish/GuidelinesComponent";
import PublishComponent from "../Components/Publish/PublishComponent";

function PublishPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Publish ● YSJ</title>
        <meta
          name="description"
          content="Submit your STEM research to the YSJ Journal! Open to high school students and undergraduates. Enjoy a free publishing process with professional editing to ensure high-quality articles."
        />
        <meta
          name="keywords"
          content="publish research, YSJ Journal, STEM submissions, high school research, undergraduate research, academic writing, free publishing, research guidelines, scientific research, article submission"
        />
        <link rel="icon" href="../images/favicon/favicon.ico" />
        <link rel="canonical" href="https://ys-journal.org/Publish" />
      </Helmet>
      <HeroComponent />
      <FeaturesComponent />
      <CriteriaComponent />
      <GuidelinesComponent />
      <PublishComponent />
    </React.Fragment>
  );
}

export default PublishPage;
