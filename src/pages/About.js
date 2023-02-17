const About = (props) => {
  const { homeTown, education, age, fullName, bio, profile } = props.aboutData;
  return (
    <div
      id="about-page"
      style={{ textAlign: "center", paddingBottom: "30px" }}
      className="about-wrapper"
    >
      <div className="about-header">
        <h1
          style={{
            backgroundColor: "#1b283b",
            color: "white",
            margin: " 20px auto 30px auto",
            padding: "10px 0px",
            width: "94%",
            borderRadius: "5px",
          }}
        >
          Meet Caleb
        </h1>
      </div>
      <div
        style={{ justifyContent: "space-around", textAlign: "left" }}
        className="row m-auto about-info"
      >
        <div
          style={{ padding: "50px" }}
          className="col-xl-6 col-sm-12 about-text"
        >
          <p>
            <b>Hometown</b>: {homeTown}
          </p>
          <p>
            <b>Education</b>: {education}
          </p>
          <p>
            <b>Age</b>: {age}
          </p>
          <p>
            <b>Name</b>: {fullName}
          </p>
          <p>
            <b>Bio</b>: {bio}
          </p>
        </div>
        <div
          style={{ display: "flex", alignItems: "center" }}
          className="col-xl-4 col-6 about-image"
        >
          <img
            style={{
              width: "100%",
              borderRadius: "25px",
            }}
            src={profile}
            alt="profile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
