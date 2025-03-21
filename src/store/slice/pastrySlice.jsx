import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  pastries: [],
  isLoading: false,
  error: null,
  showAddForm: false,
  showEditForm: false,
  currentPastry: null,
}

const pastriesSlice = createSlice({
  name: "pastries",
  initialState,
  reducers: {
    setPastries: (state, action) => {
      state.pastries = action.payload
    },
    setShowAddForm: (state, action) => {
      state.showAddForm = action.payload
    },
    setShowEditForm: (state, action) => {
      state.showEditForm = action.payload
    },
    setCurrentPastry: (state, action) => {
      state.currentPastry = action.payload
    },
  },
})

export const {
  setPastries,
  setShowAddForm,
  setShowEditForm,
  setCurrentPastry,
} = pastriesSlice.actions
export default pastriesSlice.reducer
