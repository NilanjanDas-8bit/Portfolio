import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Nilanjan Das</b> and I am from West Bengal,
            India. I'm a <b>Fullstack web developer</b> and currently 3rd year
            College student pursuing <b>Information Technology</b>. <br />
            <br />
            I love to create projects for my work and personal reasons,
            I've worked for a my College to build College website,
            and made a website for a Interior Designing company.
            Learning to Web Development and AI-ML.
            Sidewise Intrested in Cyber-Security.
            <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            Apart from coding I love to make discord servers,Play game and a proffesional eSports Player.
          </p>
          <a href="/src/assets/Nilanjan_Das_Resume.pdf" download="Nilanjan_Das_Resume.pdf" className="resume-btn">
               <button>
                 Download Resume <FaFileDownload />
               </button>
           </a>


        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Python" />
        <Skills skill="NodeJS" />
        <Skills skill="Npm" />
      </div>
    </>
  );
};

export default About;
