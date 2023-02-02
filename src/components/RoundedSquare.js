const RoundedSquare = ({ icon, text }) => {
  return (
    <div className="rounded-square">
      <img className="rounded-square-icon" src={icon} alt="" />
      <div className="rounded-square-text">{text}</div>
    </div>
  )
}

export default RoundedSquare
