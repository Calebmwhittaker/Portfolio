import React from "react";
import { useWindowSize } from "../utilities/checkWindow";

const Project = (props) => {
  const { className, text, style, title, src, code, site } = props.projectData;
  const newTitle = title.replace(/\s/g, "");
  const target = "#".concat(newTitle).concat("Modal");
  return (
    <div style={style} className={className}>
      <h2 style={{ marginBottom: "15px" }}>{title}</h2>
      {useWindowSize() > 850 && (
        <div>
          <button
            type="button"
            className="project-button btn"
            data-bs-toggle="modal"
            data-bs-target={target}
            style={{ backgroundColor: "#1b283b", marginBottom: "20px" }}
          >
            <img
              style={{
                width: "100%",
                backgroundColor: "#ffffff",
                display: "inline-block",
                margin: "10px auto",
              }}
              src={src}
              alt={title}
            />
          </button>
          <div
            className="modal fade"
            id={newTitle.concat("Modal")}
            tabIndex="-1"
            aria-labelledby={newTitle.concat("ModalLabel")}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1
                    className="modal-title fs-5"
                    id={newTitle.concat("ModalLabel")}
                  >
                    {title}
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{text}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <br />
        </div>
      )}
      {useWindowSize() <= 850 && (
        <div>
          <img
            style={{
              width: "280px",
              border: "5px solid black",
              marginBottom: "10px",
            }}
            src={src}
            alt={title}
          />
          <p>{text}</p>
        </div>
      )}
      {code && (
        <div className="project-buttons">
          <a
            href={site}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "116px", margin: "0 auto" }}
          >
            <button style={{ marginRight: "5px" }} className="btn btn-dark">
              View Project
            </button>
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: "116px", margin: "0 auto" }}
          >
            <button className="btn btn-dark">Github Code</button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Project;
