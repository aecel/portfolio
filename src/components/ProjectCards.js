import getOdinProjects from "../getOdinProjects"
import getProjectArray from "../getProjectArray"
import ProjectCard from "./ProjectCard"

const ProjectCards = () => {
  const projectArray = getOdinProjects()

  return (
    <div class="projects-container">
      {projectArray.map((project) => {
        return (
          <ProjectCard
            id={project.id}
            name={project.name}
            key={project.id}
            imageSrc={project.imageSrc}
            alt={project.alt}
            link={project.link}
          />
        )
      })}
    </div>
  )
}

export default ProjectCards
