import React, {useContext} from "react";
import "./Resume.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import resumeImg from "../../assets/images/adam-chhor_resume.jpeg";
import Button from "../button/Button";

export default function Resume() {
  const {isDark} = useContext(StyleContext);
  return (
    <div id="resume">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container" id="resume2">
          <div
            style={{
              display: "grid",
              placeItems: "center",
              // maxHeight: "1000px",
              maxWidth: "100%"
            }}
          >
            <h1 className="experience-heading">Resume</h1>
            <img
              src={resumeImg}
              alt="Resume"
              style={{
                maxHeight: "1000px",
                maxWidth: "100%"
              }}
            />
            <a
              href={require("../../assets/images/Adam_Chhor_Resume.pdf")}
              download="Adam_Chhor_Resume.pdf"
              className="download-link-button"
            >
              <Button text="Download my resume" />
            </a>
          </div>
        </div>
      </Fade>
    </div>
  );
}
