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
      <h1
        style={{
          margin: "30px auto",
          backgroundColor: "white",
          color: "black",
          padding: "10px 0px",
          width: "90%",
          borderRadius: "5px",
        }}
      >
        Resume
      </h1>
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
