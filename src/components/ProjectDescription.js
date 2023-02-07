const ProjectDescription = ({ description }) => {
  return (
    <>
      {description ? (
        <div>
          <div className="project-info-text-heading">Description</div>
          <div className="project-info-text">{description}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectDescription;
