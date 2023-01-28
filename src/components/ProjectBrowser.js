import habbitAppGif from "../images/projects/shopping-cart.gif"

const ProjectBrowser = () => {
  return (
    <div className="project-browser-container">
      <div className="project-browser-header">
        <div className="project-browser-header-button"></div>
        <div className="project-browser-header-button"></div>
        <div className="project-browser-header-button"></div>
      </div>
      <div className="project-navbar">
        <div className="project-navbar-tab"></div>
        <div className="project-navbar-tab"></div>
        <div className="project-navbar-tab"></div>
        <div className="project-navbar-tab"></div>
        <div className="project-navbar-tab"></div>
      </div>
      <div className="project-browser">
        <a
          target="_blank"
          rel="noreferrer"
          className="project-gif"
          id="ID"
          href="{link}"
        >
          <img src={habbitAppGif} alt="{alt}" />
        </a>
      </div>
      <div className="project-info"></div>
    </div>
  )
}

export default ProjectBrowser
