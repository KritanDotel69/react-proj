import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./movieApi";











export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
  },
  middleware: (curryGetDefaultMiddleware) => curryGetDefaultMiddleware().concat([
    movieApi.middleware
  ])
})