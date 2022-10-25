import React from "react";
import "animate.css";
import "../../styles/resume.css";

export default function Resume() {
  return (
    <div className="container">
      <div className="row qualifications">
        <h2 className="animate__animated animate__bounceInRight title">
          RESUME
        </h2>
        <a
          href="https://github.com/Jevenden/sandbox/raw/master/src/docs/John%20Evenden.pdf"
          className="link"
        >
          Download Resume
        </a>
        <ul>
          <li>Javascript, CSS, HTML</li>
          <li>MongoDB</li>
          <li>Express JS</li>
          <li>React JS</li>
          <li>Node JS</li>
          <li>SQL</li>
          <li>GraphQL and RESFUL API</li>
          <li>MVC software architecture</li>
          <li>OOP</li>
          <li>Handlebars</li>
          <li>Apollo</li>
        </ul>
        <h4>Languages</h4>
        <ul>
          <li>Javascript</li>
          <li>MySQL</li>
        </ul>
        <h4>Certifications</h4>
        <ul>
          <li>
            Graduate: Georgia Tech University Full Stack Web Development Boot
            Camp
          </li>
        </ul>
      </div>
    </div>
  );
}
