import React from "react";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
  IoLogoNodejs,
  IoLogoPython,
  IoLogoNpm,
} from "react-icons/io5";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap, FaReact, FaGitAlt } from "react-icons/fa";

const Skill = ({ skill }) => {
  const icon = {
    HTML: <IoLogoHtml5 />,
    CSS: <IoLogoCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Github: <IoLogoGithub />,
    NodeJS: <IoLogoNodejs />,
    Python: <IoLogoPython />,
    Npm: <IoLogoNpm />,
  };

  return (
    <div className="SkillBox" title={skill}>
      {icon[skill]}
    </div>
  );
};

export default Skill;
