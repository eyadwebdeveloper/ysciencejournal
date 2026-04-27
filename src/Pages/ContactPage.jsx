import React from "react";
import { Helmet } from "react-helmet";
import ContainerComponent from "../Components/Contact/ContainerComponent";

function ContactPage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Contact ● YSJ</title>
        <meta name="description" content="Learn more about us on this page." />
        <meta
          name="keywords"
          content="high school research journal, contact high school journal, research journal contact information, submit research questions, journal submission contact, research collaboration inquiries, contact for students, teacher research inquiries, parent inquiries about research, research mentor contact information, email contact for research journal, phone number for journal inquiries, contact form for research submissions"
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
        <link rel="canonical" href="https://ys-journal.org/Contact" />
      </Helmet>
      <ContainerComponent />
    </React.Fragment>
  );
}

export default ContactPage;
