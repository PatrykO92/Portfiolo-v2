import osDesktopScreen from "../images/portfolio-projects/1/os-desktop.jpg";
import eCommerceScreen from "../images/portfolio-projects/2/FM-e-commerce.jpg";

import { gitHubLogo, codewarsLogo, frontendMentor } from "../icons/index";

const PortfolioPage = () => {
  const buttonHandler = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div id="portfolio">
      <div className="portfolio-div-full">
        <h2>Projects</h2>
      </div>

      <div className="portfolio-div">
        <img src={osDesktopScreen} alt="" />
        <span>OS PO® Operating System Desktop</span>
        <div className="portfolio-buttons">
          <a href="https://github.com/PatrykO92/OS_desktop_OS-PO-frontend">
            GitHub
          </a>
          <a href="https://operating-system-po.netlify.app/">Live</a>
        </div>
      </div>

      <div className="portfolio-div">
        <img src={eCommerceScreen} alt="portfolio" />
        <span>E-commerce Product Page</span>
        <div className="portfolio-buttons">
          <a href="https://github.com/PatrykO92/FrontendMentor_Ecommerce-product-page">
            GitHub
          </a>
          <a href="https://e-commerce-challange-fm.netlify.app/">Live</a>
        </div>
      </div>

      <div className="portfolio-div-full">
        <p>
          Those are my two favorite projects. Check out my GitHub for other
          ones.
        </p>
        <button
          onClick={() => buttonHandler("https://github.com/PatrykO92")}
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
        <p>You can also look at my Code Wars and Frontend Mentor profiles.</p>
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
