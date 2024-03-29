import { GoogleMap, useLoadScript } from "@react-google-maps/api";
const Contact = (props) => {
  const { email, phone, linked, twitter, github } = props.contactData;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  const Map = () => {
    return (
      <GoogleMap
        zoom={10}
        center={{ lat: 43.5949250642613, lng: -83.88834151847749 }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    );
  };

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        color: "#000000",
        justifyContent: "space-around",
        textAlign: "center",
        padding: "30px 0px",
        width: "100%",
      }}
      className="row m-auto contact-wrapper"
      id="contact-page"
    >
      <h1
        style={{
          textAlign: "center",
          padding: "10px 0px",
          backgroundColor: "#1b283b",
          color: "#ffffff",
          borderRadius: "5px",
          width: "93.5%",
          margin: " 0px auto 30px auto",
        }}
      >
        Contact Me
      </h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        className="col-xl-6 col-12 contact-info"
      >
        <div>
          <p style={{ marginTop: "20px" }}>
            <b>Email</b>: {email}
          </p>
          <p>
            <b>Telephone Number</b>: {phone}
          </p>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: "30%",
              margin: "0 auto",
              paddingLeft: "0px",
            }}
          >
            <li>
              <a href={linked} aria-label="link">
                <i
                  style={{ color: "black", fontSize: "1.5rem" }}
                  className="linkedIn fa-brands fa-linkedin"
                ></i>
              </a>
            </li>
            <li>
              <a href={twitter} aria-label="link">
                <i
                  style={{ color: "black", fontSize: "1.5rem" }}
                  className="twitter fa-brands fa-twitter"
                ></i>
              </a>
            </li>
            <li>
              <a href={github} aria-label="link">
                <i
                  style={{ color: "black", fontSize: "1.5rem" }}
                  className="github fa-brands fa-github"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-xl-4 col-12 contact-image">
        {/* <img
          className="col-xl-12 col-6 contact-profile"
          style={{ display: "inline-block", margin: "30px 0px" }}
          src={profile}
          alt="profile"
        /> */}
        <h1 style={{ margin: "30px 0px 30px 0px" }} className="col-12">
          Thank you for your time!
        </h1>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
