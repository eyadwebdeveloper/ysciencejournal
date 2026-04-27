import React, { useEffect, useRef } from "react";

function FaqComponent() {
  const accordionButtonsRef = useRef([]);

  // Define your accordion items here
  const accordionItems = [
    {
      title: "- Can I register if I am still working on my research paper?",
      content:
        "In case you have a project idea but haven't yet completed the entire project, you can follow the following procedures to register: fill in the application and choose the option “no” in the question “upload paper now”. After applying, you will find the competition discord where you can seek technical support. However, you are supposed to upload your paper on the application portal by the registration deadline.",
    },
    {
      title: "- What is the first-round system?",
      content:
        "In the first round, all the submitted articles are reviewed by the journal editors, and the best research articles are qualified to the second round. Carefully deliberated aspects include research originality, academic writing, as well as the commitment to research ethics.",
    },
    {
      title: "- What happens to the first-round qualifiers?",
      content:
        "Qualifiers go on to the second, and the last, round, where they have a 15-minute presentation in the presence of a judicator, highlighting the novel and most important aspects of their research. Before the second round, each team is asked to submit a presentation. The top three teams in each field are announced as winners.",
    },
  ];

  const toggleAccordion = (index) => {
    const itemToggle =
      accordionButtonsRef.current[index]?.getAttribute("aria-expanded");

    // Set all buttons to 'false'
    accordionButtonsRef.current.forEach((button) => {
      if (button) {
        button.setAttribute("aria-expanded", "false");
      }
    });

    // If the clicked button was 'false', set it to 'true'
    if (itemToggle === "false") {
      accordionButtonsRef.current[index].setAttribute("aria-expanded", "true");
    }
  };

  useEffect(() => {
    // Capture the current buttons in a local variable
    const currentButtons = accordionButtonsRef.current;

    // Define the click event handler
    const handleClick = (index) => () => toggleAccordion(index);

    // Attach click event listeners to each button
    currentButtons.forEach((button, index) => {
      if (button) {
        button.addEventListener("click", handleClick(index));
      }
    });

    // Cleanup function to remove event listeners
    return () => {
      currentButtons.forEach((button, index) => {
        if (button) {
          button.removeEventListener("click", handleClick(index));
        }
      });
    };
  }, []);

  return (
    <React.Fragment>
      <section className="faq">
        <div className="title">
          <hr />
          <h2>Frequently Asked Questions</h2>
          <hr />
        </div>
        <div className="accordion">
          {accordionItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button
                id={`accordion-button-${index + 1}`}
                aria-expanded="false"
                ref={(el) => (accordionButtonsRef.current[index] = el)}
              >
                <span className="accordion-title">{item.title}</span>
                <span className="icon" aria-hidden="true"></span>
              </button>
              <div className="accordion-content">
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

export default FaqComponent;
