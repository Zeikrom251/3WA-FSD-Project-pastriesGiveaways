const RollButton = ({ onRoll, disabled }) => {
  return (
    <button className="roll-button" onClick={onRoll} disabled={disabled}>
      Lancer les dés
    </button>
  )
}

export default RollButton
