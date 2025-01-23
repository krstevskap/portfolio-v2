import React, { useState } from "react";
import Card from "../Card/Card";
import "./projects.css";

const Projects = () => {
  const cards = [
    {
      description:
        "A React-based web application that allows users to track their income, expenses, and categorize them.",
      link: "https://github.com/krstevskap/expense-tracker",
      technologies: "React, Firebase",
      title: "Expense Tracker",
      website: "https://expense-tracker-497b9.web.app",
    },
    {
      description:
        "The main functionality is to replace in-person scheduling appointments with a digital system.",
      link: "https://github.com/Timski-Proekt/TP",
      technologies: "React, Java Spring, PostgreSQL",
      title: "Digital Driver’s License Appointment Scheduler",
      website: "",
    },
    {
      description:
        "A React-based task management application that allows users to create, edit, delete, and drag-and-drop tasks between columns.",
      link: "https://github.com/krstevskap/kanban-board",
      technologies: "React",
      title: "Kanban Board",
      website: "https://kanban-task-dashboard.vercel.app/",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(0);

  return (
    <div className="projects-container box">
      <h3>Projects</h3>
      <div className="card-list">
        <Card
          description={cards[selectedProject].description}
          link={cards[selectedProject].link}
          technologies={cards[selectedProject].technologies}
          title={cards[selectedProject].title}
          website={cards[selectedProject].website}
        />
      </div>
      <div className="choose-project">
        <div onClick={() => setSelectedProject(0)}></div>
        <div onClick={() => setSelectedProject(1)}></div>
        <div onClick={() => setSelectedProject(2)}></div>
      </div>
    </div>
  );
};

export default Projects;
