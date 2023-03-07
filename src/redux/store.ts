import { configureStore } from "@reduxjs/toolkit"
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
