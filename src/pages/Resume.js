const Resume = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: "#1b283b",
        color: "#ffffff",
      }}
      className="row m-auto resume-wrapper"
    >
      <h1 style={{ margin: "30px 0px" }}>Resume</h1>
      <div
        style={{ height: "500px" }}
        className="col-xl-6 col-12 resume-left-side"
      >
        Left Side
      </div>
      <div
        style={{ height: "500px" }}
        className="col-xl-6 col-12 resume-right-side"
      >
        Right Side
      </div>
    </div>
  );
};

export default Resume;
