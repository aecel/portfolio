const ProjectInfo = ({
  name,
  projectType,
  link,
  githubLink,
  description,
  lessons,
}) => {
  return (
    <div className="project-info">
      <div className="project-info-top">
        <div>
          {name} - {projectType}
        </div>
        <div className="project-links">
          <a
            className="project-link"
            target="_blank"
            rel="noreferrer"
            href={githubLink}
          >
            Github Link
          </a>
          <a
            className="project-link"
            target="_blank"
            rel="noreferrer"
            href={link}
          >
            Website Link
          </a>
        </div>
      </div>
      {/* <div className="project-info-text">{description}</div>
      <div className="project-info-text" style={{ fontWeight: "bold" }}>
        What I learned:
      </div>
      {lessons.map((lesson, index) => {
        return (
          <div key={index} className="project-info-text">
            {index+1}. {lesson}
          </div>
        )
      })} */}
    </div>
  )
}

export default ProjectInfo
