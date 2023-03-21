import { useEffect, useRef } from "react"
import introductionGif from "../images/NewProfilePic.gif"
const Introduction = ({ triggerRef, triggerRef2 }) => {
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
    <div id="Introduction" ref={sectionRef}>
      <div className="main-with-max-width">
        <img
          src={introductionGif}
          alt=""
          style={{
            width: "300px",
            height: "300px",
            // border: "white 2px dashed",
            // borderRadius: "50%",
            // objectPosition: "bottom",
            // objectFit: "contain",
          }}
        />
        <h2>Hi, I'm Aecel</h2>
        <div>I'm a front-end web developer</div>
      </div>
    </div>
  )
}

export default Introduction
