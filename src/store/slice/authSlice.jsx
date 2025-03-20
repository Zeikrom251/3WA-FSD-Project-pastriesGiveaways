import { createSlice } from "@reduxjs/toolkit"

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null
    },
    loginSuccess: (state, action) => {
      state.user = action.payload
      state.error = null
    },
    loginFailure: (state, action) => {
      state.error = action.payload
    },
  },
})

export const { logout, loginSuccess, loginFailure } = authSlice.actions
export default authSlice.reducer
