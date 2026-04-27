import React, { useEffect, useRef, useState } from "react";

function HeroComponent() {
  const typedTextRef = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the breakpoint as needed
  const textToType = `A research Competition <br class="hidden-line-break" />run by the<br class="line-break" /> <span>youth</span><br class="hidden-line-break" /> for the <span>youth</span>.`;
  const animationSpeed = 60;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let currentCharIndex = 0;
    let tempText = "";
    let inTag = false;
    let typingTimeout; // Variable to hold the timeout ID

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
          if (typedTextRef.current) {
            // Check if ref is not null
            typedTextRef.current.innerHTML = tempText;
          }
        }
        currentCharIndex++;
        typingTimeout = setTimeout(typeChar, animationSpeed);
      }
    }

    typeChar();

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(typingTimeout);
  }, [animationSpeed, textToType]);

  return (
    <React.Fragment>
      <section className="ifyr-hero">
        <h1>THE INTERNATIONAL FAIR OF YOUTH RESEARCHERS (IFYR)</h1>
        <p className="quote">"</p>
        <div className="typing-animation">
          <h2 ref={typedTextRef} id="typed-text">
            |
          </h2>
        </div>
        <a target="_blank" href="https://forms.gle/Nmb5ATyYkS3mY8xK8">
          Register now
        </a>
      </section>
    </React.Fragment>
  );
}

export default HeroComponent;
