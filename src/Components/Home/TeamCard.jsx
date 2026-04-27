import React from "react";

const TeamCard = ({
  frontImage,
  frontName,
  frontTitle,
  frontSocialLinks,
  backImage,
  backName,
  backTitle,
  backSocialLinks,
}) => {
  return (
    <div className="team-card">
      <div className="card__inner">
        <div className="card__face card__face--front">
          <div className="card__content">
            {frontImage ? (
              <img src={frontImage} alt={frontName} />
            ) : (
              <div style={{ display: "none" }}></div> // Optionally, you can omit this line entirely
            )}
            <h3>{frontName}</h3>
            <h4>{frontTitle}</h4>
            <div className="social">
              {frontSocialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="card__face card__face--back">
          <div className="card__content">
            {backImage ? (
              <img src={backImage} alt={backName} />
            ) : (
              <div style={{ display: "none" }}></div> // Optionally, you can omit this line entirely
            )}
            <h3>{backName}</h3>
            <h4>{backTitle}</h4>
            <div className="social">
              {backSocialLinks.map((link, index) => (
                <a key={index} href={link.url}>
                  <i className={link.iconClass}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
