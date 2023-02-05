import RoundedSquare from "./RoundedSquare"
import ReactLogo from "../images/logos/React.svg"
import JavascriptLogo from "../images/logos/Javascript.svg"
import HTMLLogo from "../images/logos/HTML.svg"
import CSSLogo from "../images/logos/CSS.svg"
import WebpackLogo from "../images/logos/Webpack.svg"
import npmLogo from "../images/logos/npm.svg"
import OpenWeatherLogo from "../images/logos/OpenWeatherAPI.png"
import LeafletLogo from "../images/logos/LeafletAPI.png"

const logoObj = {
  React: ReactLogo,
  Javascript: JavascriptLogo,
  HTML: HTMLLogo,
  CSS: CSSLogo,
  Webpack: WebpackLogo,
  npm: npmLogo,
  "OpenWeather API": OpenWeatherLogo,
  "Leaflet API": LeafletLogo,
}

const WhatIUsed = ({ array }) => {
  // Input is an array like this:
  // ["React", "Javascript", ...]

  return (
    <div>
      <div className="project-info-text-heading">What I used</div>
      <div className="project-stack-container">
        {array.map((name) => {
          return <RoundedSquare key={name} icon={logoObj[name]} text={name} />
        })}
      </div>
    </div>
  )
}

export default WhatIUsed
