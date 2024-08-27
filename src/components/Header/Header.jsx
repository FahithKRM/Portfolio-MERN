import './Header.css'
import profile_img from '../../assets/image1.png';
import CircumIcon from '@klarr-agency/circum-icons-react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/1o1Z-cUe3egugi5n3Ry4QbsYzlCcXwF8p/view?usp=sharing'; // file path
    link.download = 'FahithKRM_Resume.pdf'; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="header">
      <img src={profile_img} alt="" />
      <div className="header-content">
        <h1 className="name">Hi, I am Fahith KRM.</h1>
        <h2 className="title">
          Aspiring Computer Engineer with a Passion for Innovation
        </h2>
        <p className="para">
          I am a dedicated computer engineering student at the University of Jaffna.
          I specialize in software development and have a keen interest in
          artificial intelligence, React Native, and MERN stack.
        </p>
        <div className="header-action">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <button className="header-connect">Connect with me</button>
          </AnchorLink>
          <button className="header-resume" onClick={handleDownload}>
            My resume
          </button>
        </div>
        <div className="social-icons">
          <div className="social-icon">
            <a href="">
              <CircumIcon name="facebook" size="36px" color="#fff" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://x.com/Faahith_KRM">
              <CircumIcon name="twitter" size="36px" color="#fff" />
            </a>
          </div>
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/krmfahith/">
              <CircumIcon name="linkedin" size="36px" color="#fff" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
