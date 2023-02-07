import { useState } from "react";
import getProjectsArray from "../getProjectsArray";
import ProjectInfo from "./ProjectInfo";
import FireChromeSvg from "../images/logos/FireChromeBlue.svg";

const ProjectBrowser = () => {
  const projectArray = getProjectsArray();
  const [chosenProject, setChosenProject] = useState(projectArray[0]);

  const chooseTab = (index) => {
    setChosenProject(projectArray[index]);
  };

  if (!chosenProject) {
    console.log("Loading");
    return <div>Loading</div>;
  }
  return (
    <div className="project-browser-container">
      <div className="project-browser-header">
        {/* <div style={{ display: "flex" }}>
          <img className="project-favicon" src={FireChromeSvg} alt="" />
          <div>FireChrome</div>
        </div> */}
        <div className="project-browser-header-buttons">
          <div
            className="project-browser-header-button"
            style={{
              backgroundColor: "#FE5E56",
            }}
          ></div>
          <div className="project-browser-header-button"></div>
          <div className="project-browser-header-button"></div>
        </div>
      </div>
      <div
        className="project-navbar"
        style={{
          gridTemplateColumns: `repeat(${projectArray.length}, 1fr)`,
        }}
      >
        {projectArray.map((project, index) => {
          return (
            <div
              key={project.id}
              onClick={() => chooseTab(index)}
              className={
                project.id === chosenProject.id
                  ? "chosen-project project-navbar-tab"
                  : "project-navbar-tab"
              }
            >
              <img src={project.favicon} className="project-favicon" alt="" />
              {project.name}
            </div>
          );
        })}
      </div>
      <div className="project-browser-top"></div>
      <a
        target="_blank"
        rel="noreferrer"
        className="project-gif"
        href={chosenProject.link}
      >
        <img
          className="project-gif-img"
          src={chosenProject.imageSrc}
          alt={chosenProject.alt}
        />
      </a>
      <ProjectInfo
        name={chosenProject.name}
        projectType={chosenProject.projectType}
        link={chosenProject.link}
        githubLink={chosenProject.githubLink}
        description={chosenProject.description}
        lessons={chosenProject.lessons}
        whatIUsed={chosenProject.whatIUsed}
        npmLibraries={chosenProject.npmLibraries}
      />
    </div>
  );
};

export default ProjectBrowser;
