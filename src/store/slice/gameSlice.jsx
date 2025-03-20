import { createSlice } from "@reduxjs/toolkit"

const rollNewDice = () =>
  Array.from({ length: 5 }, () => Math.floor(Math.random() * 6) + 1)

const initialState = {
  diceValues: [1, 1, 1, 1, 1],
  rollsLeft: 3,
  message: "",
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

      if (Object.values(count).includes(4)) {
        state.message =
          "🎉 Superbe ! Vous avez un carré, vous gagnez 2 pâtisseries !"
      } else if (Object.values(count).includes(3)) {
        state.message = "🎉 BRAVO ! Vous avez gagné une pâtisserie !"
      } else if (state.rollsLeft === 0) {
        state.message = "😅 Dommage, essayez encore !"
      } else {
        state.message = ""
      }
    },
    resetGame: (state) => {
      state.diceValues = [1, 1, 1, 1, 1]
      state.rollsLeft = 3
      state.message = ""
    },
  },
})

export const { rollDice, resetGame } = gameSlice.actions
export default gameSlice.reducer
