import testIcon from "../images/testIcon.svg"

const RoundedSquare = () => {
  return (
    <div className="rounded-square">
      <img className="rounded-square-icon" src={testIcon} alt="" />
      <div className="rounded-square-text">Sample Text</div>
    </div>
  )
}

export default RoundedSquare
