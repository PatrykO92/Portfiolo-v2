import { useState } from "react";

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
  const [isVisible, setIsVisible] = useState([true, true, true]);

  return (
    <div id="home">
      <BackgroundComponent />
      <div className="container">
        <Navbar />
        <div>
          <div className={isVisible[0] ? "section show" : "section"}>
            <AboutPage />
          </div>
          <div className={isVisible[1] ? "section show" : "section"}>
            <PortfolioPage />
          </div>
          <div className={isVisible[2] ? "section show" : "section"}>
            <ContactPage />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
