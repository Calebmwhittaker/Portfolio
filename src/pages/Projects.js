const Projects = (props) => {
  const { project1, project2, project3 } = props.projectsData;
  return (
    <div
      style={{
        textAlign: "center",
        padding: "30px 0px 60px 0px",
        backgroundColor: "#7f7f7f",
        color: "#000000",
      }}
      className="projects-page-wrapper"
    >
      <h1
        style={{
          margin: " 0px auto 30px auto",
          backgroundColor: "#ffffff",
          padding: "10px 0px",
          width: "94%",
        }}
      >
        Projects
      </h1>
      <div
        style={{ justifyContent: "space-around" }}
        className="row m-auto projects-app-wrapper"
      >
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "450px",
          }}
          className="card col-xl-3 col-12 project-1"
        >
          <h4>MaddMarketing Solutions</h4>
          <img
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              display: "inline-block",
              marginBottom: "15px",
            }}
            src={project1}
            alt="MaddMarketing Solutions"
          />
          <p>
            I built a clone of my fiance's website to teach me the fundamentals
            of React such as folder structure, react-router, and props. I also
            learned how to use Bootstrap to increase my efficiency and maximize
            my output.
          </p>
        </div>
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "450px",
          }}
          className="card col-xl-3 col-12 project-2"
        >
          <h4>Countries API Project</h4>
          <img
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              display: "inline-block",
              marginBottom: "15px",
            }}
            src={project2}
            alt="Countries API"
          />
          <p>
            A project I built that implemented a third-party API that taught me
            a significant amount about formatting different data structures to
            pull data from an API. This project also taught me how to use hooks
            such as useState and useEffect in React.
          </p>
        </div>
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "450px",
          }}
          className=" card col-xl-3 col-12 project-3"
        >
          <h4>Gym Workout Web Scraper</h4>
          <img
            style={{
              width: "100%",
              backgroundColor: "#ffffff",
              display: "inline-block",
              marginBottom: "15px",
            }}
            src={project3}
            alt="Gym Workout Web Scraper"
          />
          <p>
            This is a project that I want to build in the near future. The
            premise of this project would be to allow users to copy the URL of a
            website with a workout on it and then scrape the data from that
            workout and deposit it into a database that the user has access to
            so that they can have a personalized list of their workouts along
            with personal records that they have for each type of workout.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;