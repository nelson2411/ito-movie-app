import axios from "axios"
import { createAsyncThunk } from "@reduxjs/toolkit"

/*
We need to store the user token in the local storage using redux-persist.
We will use the redux-persist library to persist the user token in the local storage.


*/

const urlBackend = "https://reqres.in/api/login"

export const userLogin = createAsyncThunk(
  "auth/login",
  async (userCredentials: { email: string; password: string }, thunkAPI) => {
    try {
      const response = await axios.post(urlBackend, userCredentials)
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data)
    }
  }
)
