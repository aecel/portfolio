import { useState } from "react"
import getOdinProjects from "../getOdinProjects"
import habbitAppGif from "../images/projects/habit-app.gif"

const ProjectBrowser = () => {
  const projectArray = getOdinProjects()
  const [chosenProject, setChosenProject] = useState(projectArray[0])

  const getIndexById = (id) => {
    for (const project of projectArray) {
      if (project.id === id) {
        return projectArray.indexOf(project)
      }
    }

    return null
  }
  const chooseTab = (event) => {
    const index = getIndexById(event.target.dataset.key)
    setChosenProject(projectArray[index])
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
        {projectArray.map((project) => {
          return (
            <div
              data-key={project.id}
              key={project.id}
              onClick={chooseTab}
              className={
                project.id === chosenProject.id
                  ? "chosen-project project-navbar-tab"
                  : "project-navbar-tab"
              }
            >
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
