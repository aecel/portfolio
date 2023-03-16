import RoundedSquare from "./RoundedSquare"
import chartJSLogo from "../images/logos/ChartJS.svg"
import ReactTooltipLogo from "../images/logos/ReactTooltip.svg"
import PartyJSLogo from "../images/logos/PartyJS.png"
import ReactRouterLogo from "../images/logos/ReactRouter.svg"
import JsPDFLogo from "../images/logos/jsPDF.png"
import npmLogo from "../images/logos/npm.svg"

const logoObj = {
  "Chart.js": chartJSLogo,
  "React Tooltip": ReactTooltipLogo,
  "party.js": PartyJSLogo,
  "React Router": ReactRouterLogo,
  jsPDF: JsPDFLogo,
}

const Libraries = ({ libraries }) => {
  return (
    <>
      {libraries && (
        <div>
          <div className="project-info-text-heading">npm Libraries used</div>
          <div className="project-stack-container">
            {libraries.map((name) => {
              return (
                <RoundedSquare
                  key={name}
                  icon={logoObj[name] ? logoObj[name] : npmLogo}
                  text={name}
                />
              )
            })}
          </div>
        </div>
      )}
    </>
  )
}

export default Libraries
