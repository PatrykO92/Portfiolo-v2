import { BrowserRouter, Route, Routes } from "react-router-dom";

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
  return (
    <div>
      <BackgroundComponent />
      <div className="container">
        <BrowserRouter>
          <Navbar />
          <div>
            <Routes>
              <Route path="" element={<AboutPage />} />
              <Route path="portfolio" element={<PortfolioPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
