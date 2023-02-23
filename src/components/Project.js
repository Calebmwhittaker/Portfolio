import React from "react";

const Project = (props) => {
  const { className, text, style, title, src, link } = props.projectData;
  return (
    <div style={style} className={className}>
      <h2>{title}</h2>
      <img
        style={{
          width: "100%",
          backgroundColor: "#ffffff",
          display: "inline-block",
          marginBottom: "15px",
        }}
        src={src}
        alt={title}
      />
      <p>{text}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ width: "116px", margin: "0 auto" }}
        >
          <button className="btn btn-dark">Github Code</button>
        </a>
      )}
    </div>
  );
};

export default Project;
