import portfolioPlaceholder from "../images/portfolio-projects/1/placeholder-image-high.png";
import { gitHubLogo } from "../icons/index";

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
          style={{ height: "5rem", padding: 0, border: 0, margin: "1.5rem" }}
        >
          <img
            src={gitHubLogo}
            alt="github-link"
            className="nav-icon"
            style={{ height: "100%", padding: 0, border: 0 }}
          />
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
