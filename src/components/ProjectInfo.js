import Libraries from "./Libraries"
import ProjectDescription from "./ProjectDescription"
import WhatILearned from "./WhatILearned"
import WhatIUsed from "./WhatIUsed"
import linkIconPng from "../images/linkIcon.png"

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
      <div className="project-info-content">
        <div className="project-info-top">
          <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
            {name} - {projectType}
          </div>
          <div className="project-links">
            <a
              className="project-link"
              target="_blank"
              rel="noreferrer"
              href={githubLink}
            >
              <img src={linkIconPng} className="project-favicon" alt="" />
              Github Link
            </a>
            <a
              className="project-link"
              target="_blank"
              rel="noreferrer"
              href={link}
            >
              <img src={linkIconPng} className="project-favicon" alt="" />
              Website Link
            </a>
          </div>
        </div>
        <ProjectDescription description={description} />
        {/* <WhatILearned lessons={lessons} /> */}
        <WhatIUsed array={whatIUsed} />
        <Libraries libraries={npmLibraries} />
      </div>
    </div>
  )
}

export default ProjectInfo
