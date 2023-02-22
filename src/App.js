import { useEffect, useState, useRef } from "react";

import onLoad from "./utils/onLoad.js";

import {
  AboutPage,
  BackgroundComponent,
  ContactPage,
  Footer,
  Navbar,
  PortfolioPage,
} from "./components";
import "./css/app.css";

function App() {
  onLoad();

  const mainContainer = useRef(null);
  const [isVisible, setIsVisible] = useState({ 0: true, 1: true, 2: true });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const changed = entries[0].target.id;
        isVisible[`${changed}`] = entries[0].isIntersecting;
        setIsVisible((oldVal) => ({ ...oldVal, ...isVisible }));
      },
      { root: null, rootMargin: "0px", threshold: 0.1 }
    );

    const childrens = mainContainer.current.children;
    for (let item of childrens) {
      observer.observe(item);
    }
  }, []);

  return (
    <div id="home">
      <BackgroundComponent />
      <div className="container">
        <Navbar isVisible={isVisible} />
        <div ref={mainContainer}>
          <div id="0" className={isVisible["0"] ? "section show" : "section"}>
            <AboutPage />
          </div>
          <div id="1" className={isVisible["1"] ? "section show" : "section"}>
            <PortfolioPage />
          </div>
          <div id="2" className={isVisible["2"] ? "section show" : "section"}>
            <ContactPage />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
