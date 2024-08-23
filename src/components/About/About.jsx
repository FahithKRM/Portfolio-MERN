import "./About.css";
import profile_img from "../../assets/image1.png";
import { useState } from "react";

const About = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <div id="about" className="about">
      <h1 className="about-title">About Me</h1>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="Fahith KRM." />
        </div>

        <div className="about-right">
          <div className="phara">
            <p>
              I am a dedicated computer engineering student at University of
              Jaffna. I specialize in software development and have a keen
              interest in artificial intelligence, React Native and MERN stack.
            </p>
          </div>
          <div className="details">
            <div className="education">
              <h3>Education : </h3>
              <ul>
                <li>
                  <strong>Bachelor's Degree in Computer Engineering</strong> -
                  University of Jaffna, Expected Graduation: 2025
                </li>
                <li>
                  Relevant Courses: Data Structures and Algorithms, Computer
                  Systems Engineering, Artificial Intelligence and Computer
                  Architecture
                </li>
              </ul>
            </div>
            <div className="skills">
              <h3>Skills : </h3>
              <p>
                Proficient in JavaScript, Python, C++, React, Next.js, Node.js,
                MongoDB and more. Familiar with Git, Docker, Kubernetes and
                cloud platforms like AWS and Azure.
              </p>
              <div className="about-skills">
                <div className="about-skill">
                  <p>C++</p>
                  <hr style={{ width: "35%" }} />
                </div>
                <div className="about-skill">
                  <p>Java</p>
                  <hr style={{ width: "45%" }} />
                </div>
                <div className="about-skill">
                  <p>Python</p>
                  <hr style={{ width: "55%" }} />
                </div>
                <div className="about-skill">
                  <p>JavaScript</p>
                  <hr style={{ width: "65%" }} />
                </div>
              </div>
            </div>
            {showAll && (
              <>
                <div className="achievements">
                  <h3>Achievements : </h3>
                  <ul>
                    <li>Certified in React by HackerRank.</li>
                    <li>Earned in Deep Learning by Kaggle.</li>
                    <li>Achieved Python certification from Sololearn</li>
                  </ul>
                </div>
                <div className="professional-values">
                  <h3>Professional Values : </h3>
                  <p>
                    I believe in writing clean, efficient code and continuously
                    improving my skills. Passionate about leveraging technology
                    to solve real-world problems.
                  </p>
                </div>
                <div className="fun-facts">
                  <h3>Fun Facts : </h3>
                  <p>
                    I love coding challenges, enjoy hiking and am a coffee
                    enthusiast. In my free time, you can find me exploring new
                    trails, participating in hackathons or brewing the perfect
                    cup of coffee. These hobbies not only keep me energized but
                    also inspire my creativity and problem-solving skills in my
                    projects.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="more">
        <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show Less" : "Show More"}</button>
      </div>
    </div>
  );
};

export default About;
