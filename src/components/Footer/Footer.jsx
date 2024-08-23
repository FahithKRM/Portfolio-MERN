import "./Footer.css";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <h1>Fahith KRM.</h1>
          <p> Aspiring Computer Engineer with a Passion for Innovation</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <CircumIcon name="user" color="#000" size="24px" />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              id=""
            />
          </div>
          <button className="footer-subscribe">Subscribe</button>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          &copy; 2024 Fahith KRM. All Rights Reserved
        </p>
        <div className="footer-bottom-right">
          <p>Term of services</p>
          <p>Privacy policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
