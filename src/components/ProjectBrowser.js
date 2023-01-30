import { useState } from "react"
import getOdinProjects from "../getOdinProjects"

const ProjectBrowser = () => {
  const projectArray = getOdinProjects()
  const [chosenProject, setChosenProject] = useState(projectArray[0])

  const chooseTab = (index) => {
    setChosenProject(projectArray[index])
  }

  if (!chosenProject) {
    console.log("Loading")
    return <div>Loading</div>
  }
  return (
    <div className="project-browser-container">
      <div className="project-browser-header">
        <div>{chosenProject.name + " - " + chosenProject.projectType}</div>
        <div className="project-browser-header-buttons">
          <div className="project-browser-header-button"></div>
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
          )
        })}
      </div>
      <div className="project-browser">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-gif"
          href={chosenProject.link}
        >
          <img src={chosenProject.imageSrc} alt={chosenProject.alt} />
        </a>
      </div>
      {/* <div className="project-info"></div> */}
    </div>
  )
}

export default ProjectBrowser
