import DiceBoard from "../components/DiceBoard"
import Header from "../components/Header"

const Game = () => {
  return (
    <>
      <Header />
      <div className="game-container">
        <h1>🎲 Jeu de dés : Gagnez des Pâtisseries !</h1>
        <DiceBoard />
      </div>
    </>
  )
}

export default Game
