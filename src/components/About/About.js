import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="introduction-container box">
      <p>
        I'm a <span className="mark-words">software engineering</span> student
        at
        <a
          href="https://www.finki.ukim.mk/"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          {" "}
          Faculty of Computer Science & Engineering{" "}
        </a>{" "}
        who loves turning random ideas into cool projects. I’m into front-end
        development because it’s like a mix of art and problem-solving, and I’m
        always looking for fun ways to try out what I’ve learned.
      </p>
    </div>
  );
};

export default About;
