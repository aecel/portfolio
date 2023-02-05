import WhatIUsed from "./WhatIUsed"

const ProjectInfo = ({
  name,
  projectType,
  link,
  githubLink,
  description,
  lessons,
  whatIUsed,
}) => {
  return (
    <div className="project-info">
      <div className="project-info-top">
        <div style={{ fontWeight: "bold" }}>
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

      {/* <div className="project-info-text-heading">Description</div>
      <div className="project-info-text">{description}</div> */}

      <WhatIUsed array={whatIUsed} />

      {/* <div className="project-info-text-heading">What I learned</div>
      {lessons.map((lesson, index) => {
        return (
          <div key={index} className="project-info-text">
            {index + 1}. {lesson}
          </div>
        )
      })} */}
    </div>
  )
}

export default ProjectInfo
