import { useEffect, useRef } from "react"
import GithubLogo from "../images/logos/Github.png"
const Github = ({ triggerRef, triggerRef2 }) => {
  const sectionRef = useRef()

  const scroll = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    const trigger = triggerRef.current
    trigger.addEventListener("click", scroll)
    const trigger2 = triggerRef2.current
    trigger2.addEventListener("click", scroll)

    return () => {
      trigger.removeEventListener("click", scroll)
      trigger2.removeEventListener("click", scroll)
    }
  }, [triggerRef, triggerRef2])
  return (
    <div id="Github" ref={sectionRef}>
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
          <h2>I'm on GitHub! (@aecel)</h2>
        </a>
        <a target="_blank" rel="noreferrer" href="https://github.com/aecel">
          <img
            className="github-calendar"
            src="https://ghchart.rshah.org/737BCE/aecel"
            alt="aecel's Github chart"
          />
        </a>
      </div>
    </div>
  )
}

export default Github
