import RoundedSquare from "./RoundedSquare"
import ReactLogo from "../images/logos/React.svg"
import JavascriptLogo from "../images/logos/Javascript.svg"
import HTMLLogo from "../images/logos/HTML.svg"
import CSSLogo from "../images/logos/CSS.svg"

const logoObj = {
  React: ReactLogo,
  Javascript: JavascriptLogo,
  HTML: HTMLLogo,
  CSS: CSSLogo,
}

const WhatIUsed = ({ array }) => {
  // Input is an array like this:
  // ["React", "Javascript", ...]

  return (
    <div className="project-stack-container">
      {array.map((name) => {
        return <RoundedSquare icon={logoObj[name]} text={name} />
      })}
    </div>
  )
}

export default WhatIUsed
