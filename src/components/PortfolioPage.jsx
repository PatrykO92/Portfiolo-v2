const PortfolioPage = () => {
  const buttonHandler = (url) => {
    window.location.href = url;
  };
  return (
    <div id="portfolio">
      <div className="portfolio-div">
        <img
          src="src/images/portfolio-projects/1/placeholder-image-high.png"
          alt="portfolio image"
        />
        <h3>Project name</h3>
        <div>
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
        <img
          src="src/images/portfolio-projects/1/placeholder-image-high.png"
          alt="portfolio image"
        />
        <h3>Project name</h3>
        <div>
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
          projects.
        </p>
        <button onClick={() => buttonHandler("https://github.com")}>
          GitHub
        </button>
      </div>
    </div>
  );
};

export default PortfolioPage;
