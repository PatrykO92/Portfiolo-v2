import { reactLogo, htmlLogo, jsLogo, cssLogo } from "../icons";

const Footer = () => {
  return (
    <footer>
      <div>
        <p>© All Rights Reserved by Patryk Orlowski</p>
      </div>
      <div>
        <p>Created with: </p>
        <img src={htmlLogo} alt="" className="footer-icon" />
        <img src={cssLogo} alt="" className="footer-icon" />
        <img src={jsLogo} alt="" className="footer-icon" />
        <img src={reactLogo} alt="" className="footer-icon" />
      </div>
    </footer>
  );
};

export default Footer;
