import React from "react";
import "./about.css";
function About() {
  return (
    <div className="about-container" id="about_section">
      <div className="image-container">
        <img src="classroom.jpeg" className="image-style"></img>
      </div>
      <div className="about-text">
        Teacher Works! is an online tutoring service aimed towards elementary
        and high-school students. We believe that students need to have all of
        the tools available to them to succeed in life and school. We offer
        weekly, bi-weekly and monthly tutoirng sessions. We work with you, for
        you and your children.
      </div>
    </div>
  );
}

export default About;
