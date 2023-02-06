import Libraries from "./Libraries"
import ProjectDescription from "./ProjectDescription"
import WhatILearned from "./WhatILearned"
import WhatIUsed from "./WhatIUsed"

const ProjectInfo = ({
  name,
  projectType,
  link,
  githubLink,
  description,
  lessons,
  whatIUsed,
  npmLibraries,
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

      {/* <ProjectDescription description={description} /> */}
      <WhatIUsed array={whatIUsed} />
      <Libraries libraries={npmLibraries} />
      {/* <WhatILearned lessons={lessons} /> */}
    </div>
  )
}

export default ProjectInfo
