import { configureStore } from "@reduxjs/toolkit"
import { pastriesApi } from "../services/pastriesApi"
import gameReducer from "./slice/gameSlice"
import authReducer from "./slice/authSlice"
import pastriesReducer from "./slice/pastrySlice"
import { usersApi } from "../services/usersApi"

export const store = configureStore({
  reducer: {
    [pastriesApi.reducerPath]: pastriesApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    pastries: pastriesReducer,
    auth: authReducer,
    game: gameReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pastriesApi.middleware, usersApi.middleware),
})

export default store
