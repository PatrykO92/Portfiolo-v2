import {
  gitHubLogo,
  linkedInLogo,
  resumeLogo,
  hamburgerButton,
} from "../icons";
import logo from "../images/logo.png";

const Navbar = () => {
  window.addEventListener("resize", () => {
    document.querySelector(".main-menu").classList.remove("show-nav");
  });

  window.addEventListener("scroll", () => {
    document.querySelector(".main-menu").classList.remove("show-nav");
  });

  return (
    <header>
      <div className="hamburger-menu">
        <a href="/">
          <img src={logo} alt="" className="navleft-logo" />
        </a>

        <button className="hamburger">
          <img
            className="nav-icon"
            src={hamburgerButton}
            alt="Menu"
            onClick={() => {
              document.querySelector(".main-menu").classList.toggle("show-nav");
            }}
          />
        </button>
      </div>

      <nav className="main-menu">
        <div
          className="navleft"
          onClick={() => {
            document.querySelector(".main-menu").classList.remove("show-nav");
          }}
        >
          <a href="#home">Home</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="navright">
          <a
            href="https://www.linkedin.com/in/patryk-or%C5%82owski-348515258/"
            target="_blank"
            rel="noreferrer"
          >
            <img className="nav-icon" src={linkedInLogo} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/PatrykO92"
            target="_blank"
            rel="noreferrer"
          >
            <img className="nav-icon" src={gitHubLogo} alt="GitHub" />
          </a>
          <a href="../files/cv.pdf" target="_blank" rel="noreferrer">
            <img className="nav-icon" src={resumeLogo} alt="Resume" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
