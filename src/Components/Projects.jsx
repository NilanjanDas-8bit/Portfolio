import React from "react";
import ProjectBox from "./ProjectBox";
import FilmImage from "../images/interior.png";
import GymImage from "../images/college.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={GymImage} projectName="CollegeWebsite" />
        <ProjectBox projectPhoto={FilmImage} projectName="InteriorDesign" />
        
      </div>
    </div>
  );
};

export default Projects;
