import { gitHubLogo, linkedInLogo, resumeLogo } from "../icons";
import logo from "../images/logo.png";

const Navbar = () => {
  return (
    <nav>
      <div className="navleft-logo">
        <img src={logo} alt="PatrykOrlowski" />
      </div>

      <div className="navleft">
        <a href="#about" className="active">
          About
        </a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navright-add"></div>

      <div className="navright">
        <a
          href="https://www.linkedin.com/in/patryk-or%C5%82owski-348515258/"
          target="_blank"
        >
          <img className="nav-icon" src={linkedInLogo} alt="LinkedIn" />
        </a>
        <a href="https://github.com/PatrykO92" target="_blank">
          <img className="nav-icon" src={gitHubLogo} alt="GitHub" />
        </a>
        <a href="src/files/cv.pdf" target="_blank">
          <img className="nav-icon" src={resumeLogo} alt="Resume" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
