const ProjectCard = ({ id, name, imageSrc, alt, link }) => {
  return (
    <div className="project-card">
      <div class="project-title">{name}</div>
      <a
        target="_blank"
        rel="noreferrer"
        className="project-image"
        id={id}
        href={link}
      >
        <img src={imageSrc} alt={alt} />
      </a>
      <div class="project-description"></div>
    </div>
  )
}

export default ProjectCard
