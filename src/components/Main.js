import Introduction from "./Introduction"
import ProjectBrowser from "./ProjectBrowser"
import ContactMe from "./ContactMe"
import Github from "./Github"
import Footer from "./Footer"
import { useRef } from "react"

const Main = () => {
  const aboutMeRef = useRef()
  const githubRef = useRef()
  const projectsRef = useRef()
  const contactMeRef = useRef()

  const hamburgerItemsRef = useRef()

  const aboutMeHamburgerRef = useRef()
  const githubHamburgerRef = useRef()
  const projectsHamburgerRef = useRef()
  const contactMeHamburgerRef = useRef()

  const toggleHamburgerMenu = () => {
    if (hamburgerItemsRef.current.style.display === "none") {
      hamburgerItemsRef.current.style.display = "flex"
    } else {
      hamburgerItemsRef.current.style.display = "none"
    }
  }
  return (
    <>
      <header>
        <div className="header-elements">
          <button className="header-button" ref={aboutMeRef}>
            About Me
          </button>
          <button className="header-button" ref={githubRef}>
            Github
          </button>
          <button className="header-button" ref={projectsRef}>
            Projects
          </button>
          <button className="header-button" ref={contactMeRef}>
            Contact Me
          </button>
        </div>
        <button id="hamburger-menu" onClick={toggleHamburgerMenu}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </button>
        <div id="hamburger-items" ref={hamburgerItemsRef}>
          <button
            className="hamburger-item"
            ref={aboutMeHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            About Me
          </button>
          <button
            className="hamburger-item"
            ref={githubHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Github
          </button>
          <button
            className="hamburger-item"
            ref={projectsHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Projects
          </button>
          <button
            className="hamburger-item"
            ref={contactMeHamburgerRef}
            onClick={toggleHamburgerMenu}
          >
            Contact Me
          </button>
        </div>
      </header>
      <main>
        <Introduction
          triggerRef={aboutMeRef}
          triggerRef2={aboutMeHamburgerRef}
        />
        <Github triggerRef={githubRef} triggerRef2={githubHamburgerRef} />
        <ProjectBrowser
          triggerRef={projectsRef}
          triggerRef2={projectsHamburgerRef}
        />
        <ContactMe
          triggerRef={contactMeRef}
          triggerRef2={contactMeHamburgerRef}
        />
      </main>
      <Footer />
    </>
  )
}

export default Main
