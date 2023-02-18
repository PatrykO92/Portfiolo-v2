import { useState, useEffect } from "react";
import { gitHubLogo, linkedInLogo, resumeLogo, codewarsLogo } from "../icons";
import logo from "../images/logo.png";

const Navbar = () => {
  const [activePage, setActivePage] = useState("about");

  useEffect(() => {}, []);

  return (
    <nav>
      <img src={logo} alt="" className="navleft-logo" />
      <div className="navleft">
        <a
          href="#about"
          className={activePage === "about" ? "active" : ""}
          onClick={() => setActivePage("about")}
        >
          About
        </a>
        <a
          href="#portfolio"
          className={activePage === "portfolio" ? "active" : ""}
          onClick={() => setActivePage("portfolio")}
        >
          Portfolio
        </a>
        <a
          href="#contact"
          className={activePage === "contact" ? "active" : ""}
          onClick={() => setActivePage("contact")}
        >
          Contact
        </a>
      </div>

      <div className="navright">
        <a
          href="https://www.linkedin.com/in/patryk-or%C5%82owski-348515258/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="nav-icon" src={linkedInLogo} alt="LinkedIn" />
        </a>
        <a href="https://github.com/PatrykO92" target="_blank" rel="noreferrer">
          <img className="nav-icon" src={gitHubLogo} alt="GitHub" />
        </a>
        {/*TODO: change logo to whiter/prettier */}
        <a
          href="https://www.codewars.com/users/PatrykO92"
          target="_blank"
          rel="noreferrer"
        >
          <img className="nav-icon" src={codewarsLogo} alt="CodeWars" />
        </a>
        <a href="src/files/cv.pdf" target="_blank" rel="noreferrer">
          <img className="nav-icon" src={resumeLogo} alt="Resume" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
