import DiceBoard from "../components/DiceBoard"
import Header from "../components/Header"

const Game = () => {
  return (
    <>
      <Header />
      <div className="game-container">
        <DiceBoard />
      </div>
    </>
  )
}

export default Game
