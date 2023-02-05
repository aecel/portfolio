const RoundedSquare = ({ icon, text }) => {
  return (
    <div className="rounded-square">
      <div className="rounded-square-icon-container">
        <img className="rounded-square-icon" src={icon} alt="" />
      </div>
      <div className="rounded-square-text">{text}</div>
    </div>
  )
}

export default RoundedSquare
