import introductionGif from "../images/Introduction.gif"
const Introduction = () => {
  return (
    <div id="Introduction">
      <div className="main-with-max-width">
        {/* <img
          src={introductionGif}
          alt=""
          style={{
            width: "300px",
            height: "300px",
            // border: "white 2px dashed",
            borderRadius: "50%",
            objectPosition: "bottom",
            // objectFit: "contain",
          }}
        /> */}
        <h2>Hi, I'm Aecel</h2>
        <div>I'm a front-end web developer</div>
      </div>
    </div>
  )
}

export default Introduction
