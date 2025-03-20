import "../styles/Dice.style.css"

const Dice = ({ value }) => {
  const getDots = (value) => {
    const dotPositions = {
      1: [[50, 50]],
      2: [
        [20, 20],
        [80, 80],
      ],
      3: [
        [20, 20],
        [50, 50],
        [80, 80],
      ],
      4: [
        [20, 20],
        [80, 20],
        [20, 80],
        [80, 80],
      ],
      5: [
        [20, 20],
        [80, 20],
        [50, 50],
        [20, 80],
        [80, 80],
      ],
      6: [
        [20, 20],
        [80, 20],
        [20, 50],
        [80, 50],
        [20, 80],
        [80, 80],
      ],
    }

    return dotPositions[value].map((pos, index) => (
      <div
        key={index}
        className="dot"
        style={{ top: `${pos[0]}%`, left: `${pos[1]}%` }}
      />
    ))
  }

  return (
    <div className="dice">
      <div className={`face face-${value}`}>{getDots(value)}</div>
    </div>
  )
}

export default Dice
