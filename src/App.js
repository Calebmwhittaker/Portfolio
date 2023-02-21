import React from "react";
import "./assets/styles/App.css";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Footer from "./parts/footer/Footer.js";
import getAge from "./utilities/getAge.js";
import profile from "./assets/images/profile2.webp";
import project1 from "./assets/images/MaddMarketing-Solutions.webp";
import project2 from "./assets/images/Countries-API.webp";
import project3 from "./assets/images/coming-soon.webp";
import Projects from "./pages/Projects";

const App = () => {
  const aboutData = {
    homeTown: "Bay City, MI",
    education: "Bachelors of Biochemistry, SVSU",
    age: getAge(),
    fullName: "Caleb Whittaker",
    bio: "I am a recent biochemistry graduate who is interested in front-end web development. For the past 9 months, I have learned semantic HTML, responsive web design with CSS3, and modern JavaScript from various sources. In the past month I have built some projects with vanilla JavaScript and with the framework, React. I believe my time as a lab technician has allowed me to develop my problem-solving skills and my ability to handle difficult tasks. I am interested in developing personal apps/websites for the general public that everyone can enjoy.",
    profile: profile,
  };
  const projectsData = {
    project1: project1,
    project2: project2,
    project3: project3,
  };
  const contactData = {
    profile: profile,
    email: "cmwhittaker00@gmail.com",
    phone: "989-475-6028",
    linked: "https://www.linkedin.com/in/caleb-whittaker/",
    twitter: "https://twitter.com/Calebmwhittaker",
    github: "https://github.com/Calebmwhittaker",
  };
  return (
    <div className="app">
      <Home />
      <About aboutData={aboutData} />
      {/* <Resume /> */}
      <Projects projectsData={projectsData} />
      <Contact contactData={contactData} />
      <Footer />
    </div>
  );
};

export default App;
