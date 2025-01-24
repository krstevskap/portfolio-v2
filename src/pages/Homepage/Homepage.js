import React from "react";
import About from "../../components/About/About";
import Technologies from "../../components/Technologies/Technologies";
import "./homepage.css";
import Hobbies from "../../components/Hobbies/Hobbies";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Globe from "../../components/Globe/Globe";
import StrippedPattern from "../../components/StrippedPattern/StrippedPattern";
import Name from "../../components/Name/Name";

const Homepage = () => {
  return (
    <div className="homepage">
      <Name />
      <div className="wrapper">
        <section className="left-section">
          <About />
          <Hobbies />
        </section>

        <section className="middle-section">
          <Technologies />
          <div className="globe-container">
            <Globe />
          </div>
          <Contact />
        </section>

        <section className="right-section">
          <Projects />
          <div className="image-container"></div>
        </section>
      </div>
      <StrippedPattern />
    </div>
  );
};

export default Homepage;
