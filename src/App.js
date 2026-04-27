import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./Pages/HomePage";
import ProgramPage from "./Pages/ProgramPage";
import JuniorsApplicationComponent from "./Components/Program/JuniorsApplication";
import SeniorsApplicationComponent from "./Components/Program/SeniorsApplicationComponent";
import IFYRPage from "./Pages/IFYRPage";
import ApplicationComponent from "./Components/IFYR/ApplicationComponent";
import ContactPage from "./Pages/ContactPage";
import PublishPage from "./Pages/PublishPage";
import HeaderComponent from "./Components/Common/HeaderComponent";
import FooterComponent from "./Components/Common/FooterComponent";
import NotFound from "./Components/Common/404";
import ScrollToTop from "./Components/Common/ScrollToTop";
import LoadingComponent from "./Components/Common/LoadingComponent";

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const [loadingStyle, setLoadingStyle] = useState({
    opacity: 1,
    display: "flex",
  });

  useEffect(() => {
    // Set body overflow to hidden when loading starts
    document.body.style.overflow = loading ? "hidden" : "auto";

    const timer = setTimeout(() => {
      setLoadingStyle({ opacity: 0, display: "flex" }); // Start fading out
      setTimeout(() => {
        setLoading(false); // Set loading to false after 2.3 seconds
        setLoadingStyle({ display: "none" }); // Set display to none
      }, 300); // Wait for the transition to finish
    }, 2000); // Wait for 2 seconds before starting the fade out

    return () => {
      clearTimeout(timer); // Cleanup the timer on unmount
      document.body.style.overflow = "auto"; // Ensure overflow is reset
    };
  }, [loading]);

  return (
    <React.Fragment>
      <HeaderComponent activePage="home" />
      <ScrollToTop />
      {loading && <LoadingComponent style={loadingStyle} />}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={1000}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Program" element={<ProgramPage />} />
            <Route
              path="/Program/Seniors-application"
              element={<SeniorsApplicationComponent />}
            />
            <Route
              path="/Program/Juniors-application"
              element={<JuniorsApplicationComponent />}
            />
            <Route path="/IFYR" element={<IFYRPage />} />
            <Route
              path="/IFYR/Application-portal"
              element={<ApplicationComponent />}
            />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Publish" element={<PublishPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      <FooterComponent />
    </React.Fragment>
  );
}

export default App;
