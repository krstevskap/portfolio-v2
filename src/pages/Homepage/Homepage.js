import React from "react";
import About from "../../components/About/About";
import Technologies from "../../components/Technologies/Technologies";
import "./homepage.css";
import Hobbies from "../../components/Hobbies/Hobbies";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Projects/Projects";
import Name from "../../components/Name/Name";

const Homepage = () => {
  return (
    <div className="homepage">
      <Name />
      <div className="wrapper">
        <section className="left-container">
          <About />
          <div className="bottom-container">
            <Technologies />
            <div className="bottom-left-container">
              <Hobbies />
            </div>
          </div>
        </section>

        <section className="right-container">
          <Projects />
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default Homepage;
