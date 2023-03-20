const ProjectDescription = ({ description }) => {
  return (
    <>
      {description.length > 0 && (
        <div>
          <div className="project-info-text-heading">Description</div>
          {description.map((paragraph, index) => {
            return (
              <div
                className="project-info-text project-description-text"
                key={index}
                style={index === 0 ? { color: "var(--color-theme-light)" } : {}}
              >
                {paragraph}
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default ProjectDescription
