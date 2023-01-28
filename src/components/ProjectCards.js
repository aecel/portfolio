import getProjectArray from "../getProjectArray"
import ProjectCard from "./ProjectCard"

const ProjectCards = () => {
  const projectArray = getProjectArray()

  return (
    <div class="cards-container">
      {projectArray.map((project) => {
        return (
          <ProjectCard
            id={project.id}
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
