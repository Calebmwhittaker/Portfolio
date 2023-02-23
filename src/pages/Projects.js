const Projects = (props) => {
  const { project1, project2, project3 } = props.projectsData;
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
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "380px",
          }}
          className="card col-xl-3 col-12 project-1"
        >
          <h2>MaddMarketing Solutions</h2>
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
          <a
            href="
            https://github.com/Calebmwhittaker/MADDMarketing-Solutions"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "116px", margin: "0 auto" }}
          >
            <button className="btn btn-dark">Github Code</button>
          </a>
        </div>
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "380px",
          }}
          className="card col-xl-3 col-12 project-2"
        >
          <h2>Countries API Project</h2>
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
          <a
            href="https://github.com/Calebmwhittaker/Countries-API-Project"
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "116px", margin: "0 auto" }}
          >
            <button style={{ color: "white" }} className="btn btn-dark">
              Github Code
            </button>
          </a>
        </div>
        <div
          style={{
            margin: "0px 10px 30px 10px",
            padding: "30px",
            width: "380px",
          }}
          className="card col-xl-3 col-12 project-3"
        >
          <h2>Gym Workout Web Scraper</h2>
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
