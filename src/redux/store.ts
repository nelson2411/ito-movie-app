import { configureStore } from "@reduxjs/toolkit"
import { authReducer } from "./slices/authSlice"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist"

export const persistConfig = {
  key: "root",
  version: 1,
  storage,
}

const persistReducers = {
  auth: persistReducer(persistConfig, authReducer),
}

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
