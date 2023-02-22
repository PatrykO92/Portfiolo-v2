import { useState } from "react";
import {
  gitHubLogo,
  linkedInLogo,
  resumeLogo,
  hamburgerButton,
} from "../icons";
import logo from "../images/logo.png";

const Navbar = () => {
  window.addEventListener("resize", () => {
    document.querySelector(".main-menu").classList.remove("show");
  });

  const [activePage, setActivePage] = useState("");

  return (
    <header>
      <div className="hamburger-menu">
        <img src={logo} alt="" className="navleft-logo" />
        <button className="hamburger">
          <img
            className="nav-icon"
            src={hamburgerButton}
            alt="Menu"
            onClick={() => {
              document.querySelector(".main-menu").classList.toggle("show");
            }}
          />
        </button>
      </div>

      <nav className="main-menu">
        <div
          className="navleft"
          onClick={() => {
            document.querySelector(".main-menu").classList.remove("show");
          }}
        >
          <a
            href="#home"
            className={activePage === "about" ? "active" : ""}
            onClick={() => setActivePage("about")}
          >
            Home
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
          <a
            href="https://github.com/PatrykO92"
            target="_blank"
            rel="noreferrer"
          >
            <img className="nav-icon" src={gitHubLogo} alt="GitHub" />
          </a>
          <a href="src/files/cv.pdf" target="_blank" rel="noreferrer">
            <img className="nav-icon" src={resumeLogo} alt="Resume" />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
