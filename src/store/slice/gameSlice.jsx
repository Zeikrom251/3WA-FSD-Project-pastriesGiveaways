import { createSlice } from "@reduxjs/toolkit"

const rollNewDice = () =>
  Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)

const initialState = {
  diceValues: [1, 1, 1, 1, 1],
  rollsLeft: 3,
  message: "",
  pastryWon: null,
  hasWon: false,
  pastriesWon: 1,
}

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    rollDice: (state) => {
      console.log("Action rolldice déclenché !")
      if (state.rollsLeft > 0) {
        state.diceValues = rollNewDice()
        state.rollsLeft -= 1
        gameSlice.caseReducers.checkWinningCondition(state)
      }
    },
    checkWinningCondition: (state) => {
      const count = {}
      state.diceValues.forEach((value) => {
        count[value] = (count[value] || 0) + 1
      })

      let pastryWon = null
      let pastriesWon = 0

      if (Object.values(count).includes(4)) {
        pastryWon = "Carré"
        pastriesWon = 3
      }
      if (Object.values(count).includes(3)) {
        pastryWon = "Berlan"
        pastriesWon = 2
      }
      if (Object.values(count).includes(2)) {
        pastryWon = "Paire"
        pastriesWon = 1
      }

      if (pastryWon) {
        state.pastryWon = pastryWon
        state.pastriesWon = pastriesWon
        state.message = `🎉 Vous avez gagné ${pastriesWon} pâtisserie${
          pastriesWon > 1 ? "s" : ""
        }!`
      } else if (state.rollsLeft === 0) {
        state.message = "😅 Dommage, essayez une prochaine fois !"
      } else {
        state.message = ""
      }
    },
    setPastryWon: (state, action) => {
      state.pastryWon = action.payload
    },
    setHasWon: (state, action) => {
      state.hasWon = action.payload
    },
    setPastriesWon: (state, action) => {
      state.pastriesWon = action.payload
    },
    resetGame: (state) => {
      state.diceValues = [1, 1, 1, 1, 1]
      state.rollsLeft = 3
      state.message = ""
      state.pastryWon = null
      state.pastriesWon = 1
      state.hasWon = false
    },
  },
})

export const { rollDice, resetGame, setPastryWon, setHasWon, setPastriesWon } =
  gameSlice.actions
export default gameSlice.reducer
