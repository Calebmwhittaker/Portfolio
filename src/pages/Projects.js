import React from "react";
import Project from "../components/Project.js";

const Projects = (props) => {
  const { project1, project2, project3 } = props.projectsData;
  const projectStyles = {
    margin: "0px 10px 30px 10px",
    padding: "30px",
    width: "350px",
  };
  const project1Data = {
    className: "card col-xl-3 col-12 project-1",
    text: `I built a clone of my fiance's website to teach me the fundamentals
    of React such as folder structure, react-router, and props. I also
    learned how to use Bootstrap to increase my efficiency and maximize
    my output.`,
    style: projectStyles,
    title: "MaddMarketing Solutions",
    src: project1,
    link: "https://github.com/Calebmwhittaker/MADDMarketing-Solutions",
  };
  const project2Data = {
    className: "card col-xl-3 col-12 project-2",
    text: `A project I built that implemented a third-party API that taught me
    a significant amount about formatting different data structures to
    pull data from an API. This project also taught me how to use hooks
    such as useState and useEffect in React.`,
    style: projectStyles,
    title: "Countries API Project",
    src: project2,
    link: "https://github.com/Calebmwhittaker/Countries-API-Project",
  };
  const project3Data = {
    className: "card col-xl-3 col-12 project-3",
    text: `This is a project that I want to build in the near future. The
    premise of this project would be to allow users to copy the URL of a
    website with a workout on it and then scrape the data from that
    workout and deposit it into a database that the user has access to
    so that they can have a personalized list of their workouts along
    with personal records that they have for each type of workout.`,
    style: projectStyles,
    title: "Gym Workout Web Scraper",
    src: project3,
  };
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px 0px 10px 0px",
        backgroundColor: "#1b283b",
        color: "#000000",
      }}
      className="projects-page-wrapper"
      id="projects-page"
    >
      <h1
        style={{
          margin: " 0px auto 30px auto",
          backgroundColor: "#ffffff",
          padding: "10px 0px",
          width: "93.5%",
          borderRadius: "5px",
        }}
      >
        Projects
      </h1>
      <div
        style={{ justifyContent: "space-around" }}
        className="row m-auto projects-app-wrapper"
      >
        <Project projectData={project1Data} />
        <Project projectData={project2Data} />
        <Project projectData={project3Data} />
      </div>
    </div>
  );
};

export default Projects;
