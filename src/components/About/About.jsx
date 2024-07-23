import React from "react";
import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              👋 Hi, I’m Fahith! I’m a passionate React developer with a knack
              for building dynamic and responsive web applications. With a
              strong foundation in JavaScript and a keen eye for detail, I
              strive to create seamless user experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>C++</p><hr style={{width:'35%'}} /></div>
            <div className="about-skill"><p>Java</p><hr style={{width:'55%'}} /></div>
            <div className="about-skill"><p>JavaScript</p><hr style={{width:'65%'}} /></div>
            <div className="about-skill"><p>Python</p><hr style={{width:'50%'}} /></div>
          </div>
        </div>
      </div>
      <div className="about-achivements">
        <div className="about-achivement">
          <h1>02</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-achivement">
          <h1>15</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className="about-achivement">
          <h1>05</h1>
          <p>HAPPY CLIENTS</p>
        </div>
      </div>
    </div>
  );
};

export default About;
