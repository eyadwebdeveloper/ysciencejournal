import React, { useEffect } from "react";
import HalfCircle from "../../images/half-circle.png";
import Issue10 from "../../images/home-issue-10.png";
import Issue9 from "../../images/home-issue-9.png";
import Issue8 from "../../images/home-issue-8.png";

function HeroComponent() {
  useEffect(() => {
    const typedText = document.getElementById("typed-text");
    const textToType = `The first Egyptian journal<br className="hidden-line-break" /> run by the<br className="line-break" /> <span>youth</span><br className="hidden-line-break" /> for the <span>youth</span>.`;
    let currentCharIndex = 0;
    let tempText = "";
    let inTag = false;

    function typeChar() {
      if (currentCharIndex < textToType.length) {
        if (textToType[currentCharIndex] === "<") {
          inTag = true;
        } else if (textToType[currentCharIndex] === ">") {
          inTag = false;
        }
        if (inTag) {
          tempText += textToType[currentCharIndex];
        } else {
          tempText += textToType[currentCharIndex];
          typedText.style.textWrap = "wrap";
          typedText.innerHTML = tempText;
        }
        currentCharIndex++;
        setTimeout(typeChar, 50); // adjust the speed of the animation here
      }
    }

    typeChar();

    const cards = document.querySelectorAll(".card__inner");
    const advisoryBtn = document.getElementById("advisory-btn");
    const teamBtn = document.getElementById("team-btn");
    const issuesLink = document.getElementsByClassName("issue-link");
    const issueAlert = document.getElementById("issue-alert");

    if (advisoryBtn && teamBtn) {
      advisoryBtn.addEventListener("click", function () {
        advisoryBtn.classList.add("active-team");
        teamBtn.classList.remove("active-team");
        cards.forEach((card) => {
          card.classList.add("is-flipped");
        });
      });

      teamBtn.addEventListener("click", function () {
        teamBtn.classList.add("active-team");
        advisoryBtn.classList.remove("active-team");
        cards.forEach((card) => {
          card.classList.remove("is-flipped");
        });
      });
    }

    // Add click event listener for issue-8-link
    if (issuesLink && issuesLink.length > 0) {
      Array.from(issuesLink).forEach((link) => {
        link.addEventListener("click", (e) => {
          e.preventDefault(); // Prevent default link behavior
          issueAlert.style.display = "flex"; // Show the alert

          // Hide the alert after 4 seconds
          const timeoutId = setTimeout(() => {
            issueAlert.style.display = "none";
          }, 5000);

          // Add click event listener to issue-alert to hide it when clicked
          issueAlert.onclick = () => {
            clearTimeout(timeoutId); // Clear the timeout if alert is clicked
            issueAlert.style.display = "none"; // Hide the alert
          };
        });
      });
    }

    // Cleanup function to remove event listeners
    return () => {
      if (advisoryBtn) {
        advisoryBtn.removeEventListener("click", () => {});
      }
      if (teamBtn) {
        teamBtn.removeEventListener("click", () => {});
      }
      if (issuesLink && issuesLink.length > 0) {
        Array.from(issuesLink).forEach((link) => {
          link.removeEventListener("click", () => {});
        });
      }
      if (issueAlert) {
        issueAlert.onclick = null; // Remove the click event listener
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <React.Fragment>
      <section className="hero">
        <img className="circle" src={HalfCircle} alt="" />
        <div className="hero-content">
          <h2>
            Featured
            <br /> Issues
          </h2>
          <h3 className="bg-text">Featured</h3>
        </div>
        <div className="issues-container">
          <a href="https://issues.ys-journal.org/issue_10.html" className="first">
            <img src={Issue10} className="first" alt="Issue 10" />
          </a>
          <a href="https://issues.ys-journal.org/issue_9.html" className="second">
            <img src={Issue9} className="second" alt="Issue 9" />
          </a>
          <a href="https://issues.ys-journal.org/issue_8.html" className="third">
            <img src={Issue8} className="third" alt="Issue 8" />
          </a>
          <a href="https://issues.ys-journal.org" className="issues-link">
            <i className="fa-solid fa-diamond-turn-right"></i>
            <span>View all issues</span>
          </a>
        </div>
      </section>
      <p className="quote">"</p>
      <div className="typing-animation">
        <h2 id="typed-text"></h2>
      </div>
      <section id="issue-alert" style={{ display: "none" }}>
        <div className="alert-box">
          <i className="fa-regular fa-circle-info"></i>
          <h2>Issues are being updated and will be available again soon</h2>
        </div>
      </section>
    </React.Fragment>
  );
}

export default HeroComponent;
