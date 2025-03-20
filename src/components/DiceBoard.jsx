import { useDispatch, useSelector } from "react-redux"
import Dice from "./Dice"
import RollButton from "./RollButton"
import { rollDice } from "../store/slice/gameSlice"
import "../styles/DiceBoard.style.css"

const DiceBoard = () => {
  const dispatch = useDispatch()

  const { diceValues, rollsLeft, message } = useSelector((state) => state.game)

  const handleRollDice = () => {
    if (rollsLeft > 0) {
      dispatch(rollDice())
    }
  }

  return (
    <div className="dice-board">
      <h2>Lancez les dés ! 🎲</h2>
      <div className="dice-container">
        {diceValues.map((value, index) => (
          <Dice key={index} value={value} />
        ))}
      </div>
      <p>Essais restants : {rollsLeft}</p>
      {message && <p className="game-message">{message}</p>}
      <RollButton onRoll={handleRollDice} disabled={rollsLeft === 0} />
    </div>
  )
}

export default DiceBoard
