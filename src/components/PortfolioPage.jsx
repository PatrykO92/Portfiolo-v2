import portfolioPlaceholder from "../images/portfolio-projects/1/placeholder-image-high.png";
import { gitHubLogo, codewarsLogo, frontendMentor } from "../icons/index";

const PortfolioPage = () => {
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="portfolio">
      <div className="portfolio-div">
        <img src={portfolioPlaceholder} alt="portfolio" />
        <span>Project name</span>
        <div className="portfolio-buttons">
          <button onClick={() => buttonHandler("https://github.com")}>
            GitHub
          </button>
          <button onClick={() => buttonHandler("https://github.com")}>
            Live
          </button>
          <button className="project-link">More info</button>
        </div>
      </div>
      <div className="portfolio-div">
        <img src={portfolioPlaceholder} alt="portfolio" />
        <span>Project name</span>
        <div className="portfolio-buttons">
          <button onClick={() => buttonHandler("https://github.com")}>
            GitHub
          </button>
          <button onClick={() => buttonHandler("https://github.com")}>
            Live
          </button>
          <button className="project-link">More info</button>
        </div>
      </div>

      <div className="portfolio-div-full">
        <p>
          Those are my two largest projects. Check out of my GitHub for smaller
          ones.
        </p>
        <button
          onClick={() => buttonHandler("https://github.com")}
          style={{ height: "5rem" }}
        >
          <img
            src={gitHubLogo}
            alt="github link"
            className="nav-icon"
            style={{ height: "100%", padding: 0, border: 0 }}
          />
        </button>
      </div>

      <div className="portfolio-div-full">
        <p>You can also checkout my codewars and frontendmentor profiles</p>
        <button
          onClick={() =>
            buttonHandler("https://www.codewars.com/users/PatrykO92")
          }
        >
          <img
            src={codewarsLogo}
            alt="codewars link"
            className="nav-icon"
            style={{ height: "100%", padding: 0, border: 0 }}
          />
        </button>
        <button
          onClick={() =>
            buttonHandler("https://www.frontendmentor.io/profile/PatrykO92")
          }
        >
          <img
            src={frontendMentor}
            alt="frontend mentor link"
            className="nav-icon"
            style={{
              height: "100%",
              padding: "0 0.34rem 0 0.34rem",
              border: 0,
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
