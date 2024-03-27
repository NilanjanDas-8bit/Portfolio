import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    CollegeWebsiteDesc:
      "Fully Responssive Beautifull College's Departmental Website.",
    CollegeWebsiteGithub: "https://github.com/YourUsername/College-Website",
    CollegeWebsiteWebsite: "https://www.jiscollege.ac.in/it/",
    // Add other project descriptions, GitHub links, and website URLs as needed




    InteriorDesignDesc:
      "Fully Respossive Beautifull Intterior Design Company's Website.",
    InteriorDesignGithub: "https://github.com/YourUsername/Interior-Design",
    InteriorDesignWebsite: "https://khushinside.000webhostapp.com/",
  };
  

  

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank" rel="noopener noreferrer">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectBox;
