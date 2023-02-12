const Contact = (props) => {
  const { profile, email, phone, linked, twitter, github } = props.contactData;
  return (
    <div
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), #1b283b)",
        color: "#ffffff",
        justifyContent: "space-around",
        textAlign: "center",
      }}
      className="row m-auto contact-wrapper"
      id="contact-page-wrapper"
    >
      <h1
        style={{
          textAlign: "center",
          padding: "10px",
          backgroundColor: "#ffffff",
          color: "#000000",
          width: "94%",
        }}
      >
        Contact Me
      </h1>
      <div className="col-xl-6 col-12 contact-info">
        <p style={{ marginTop: "20px" }}>
          <b>Email</b>: {email}
        </p>
        <p>
          <b>Telephone Number</b>: {phone}
        </p>
        <p>
          <b>LinkedIn</b>: {linked}
        </p>
        <p>
          <b>Twitter</b>: {twitter}
        </p>
        <p>
          <b>Github</b>: {github}
        </p>
      </div>
      <div className="col-xl-4 col-12 contact-image">
        <img
          className="col-xl-12 col-6 contact-profile"
          style={{ display: "inline-block", margin: "30px 0px" }}
          src={profile}
          alt="profile"
        />
        <h1 style={{ marginBottom: "30px" }} className="col-12">
          Thank you for your time!
        </h1>
      </div>
    </div>
  );
};

export default Contact;
