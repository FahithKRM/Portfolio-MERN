import "./Header.css";
import profile_img from "../../assets/image1.png";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React
import AnchorLink from "react-anchor-link-smooth-scroll";

const Header = () => {
  return (
    <div id="home" className="header">
      <img src={profile_img} alt="" />
      <div className="header-content">
        <h1 className="name">Hi, I am Fahith KRM.</h1>
        <h2 className="title">
          Aspiring Computer Engineer with a Passion for Innovation
        </h2>
        <p className="para">
          I am a dedicated computer engineering student at University of Jaffna.
          I specialize in software development and have a keen interest in
          artificial intelligence, React Native and MERN stack.
        </p>
        <div className="header-action">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <button className="header-connect">Connect with me</button>
          </AnchorLink>
          <button className="header-resume">My resume</button>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <CircumIcon name="facebook" size="36px" color="#fff" />
          </div>
          <div className="social-icon">
            <CircumIcon name="twitter" size="36px" color="#fff" />
          </div>
          <div className="social-icon">
            <CircumIcon name="linkedin" size="36px" color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
