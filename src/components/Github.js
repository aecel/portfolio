import GithubLogo from "../images/logos/Github.png"
const Github = () => {
  return (
    <div id="Github">
      <div className="main-with-max-width">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aecel"
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <img
            style={{
              height: "50px",
              width: "auto",
            }}
            src={GithubLogo}
            alt=""
          />
          <h2>I'm on GitHub!</h2>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/aecel">
          <img
            className="github-calendar"
            src="https://ghchart.rshah.org/aecel"
            alt="aecel's Github chart"
          />
        </a>
      </div>
    </div>
  )
}

export default Github
