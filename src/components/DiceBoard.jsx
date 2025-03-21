import { useDispatch, useSelector } from "react-redux"
import Dice from "./Dice"
import RollButton from "./RollButton"
import { rollDice, setHasWon, setPastryWon } from "../store/slice/gameSlice"
import "../styles/DiceBoard.style.css"
import {
  useGetPastriesQuery,
  useUpdatePastryMutation,
} from "../services/pastriesApi"

const DiceBoard = () => {
  const dispatch = useDispatch()

  const { diceValues, rollsLeft, message, pastryWon, hasWon, pastriesWon } =
    useSelector((state) => state.game)

  const { data: pastries, error, isLoading } = useGetPastriesQuery()
  const [updatePastry] = useUpdatePastryMutation()

  const getRandomPastry = () => {
    if (pastries && pastries.length > 0) {
      const randomIndex = Math.floor(Math.random() * pastries.length)
      return pastries[randomIndex]
    }
    return null
  }

  const handleRollDice = () => {
    if (rollsLeft > 0) {
      dispatch(rollDice())
    }
  }

  const handleWinningPastry = async (pastry, quantity) => {
    if (!pastry || pastry.quantity <= 0) {
      console.error("La pâtisserie n'est pas valide ou en rupture de stock.")
      return
    }

    const updatedPastry = {
      ...pastry,
      quantity: pastry.quantity - quantity,
    }
    try {
      await updatePastry(updatedPastry).unwrap()
      console.log(`Avant ${pastry.quantity} - Après ${updatedPastry.quantity}`)
    } catch (error) {
      console.error("Erreur lors de la mise à jour de la patisserie", error)
    }
  }

  if (message && message.includes("gagné") && !hasWon) {
    const pastry = getRandomPastry()
    if (pastry) {
      const quantityWon = pastriesWon || 1
      dispatch(setPastryWon(pastry))
      handleWinningPastry(pastry, quantityWon)
      dispatch(setHasWon(true))
    }
  }

  return (
    <div className="dice-board">
      <div className="dice-container">
        {diceValues.map((value, index) => (
          <Dice key={index} value={value} />
        ))}
      </div>
      <p>Essais restants : {rollsLeft}</p>
      {message && <p className="game-message">{message}</p>}

      {pastryWon && (
        <div className="pastry-won">
          <h3>Félicitations ! Vous avez gagné :</h3>
          <div className="pastry-info">
            <img
              src={`/assets/${pastryWon.image}`}
              alt={pastryWon.name}
              className="pastry-image"
            />
            <p>{pastryWon.name}</p>
          </div>
        </div>
      )}

      <RollButton
        onRoll={handleRollDice}
        disabled={rollsLeft === 0 || pastryWon}
      />
    </div>
  )
}

export default DiceBoard
