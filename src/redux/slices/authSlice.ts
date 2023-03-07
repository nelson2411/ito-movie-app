/*
Here we will create a slice of the redux store that will handle the authentication state of the user.
for the backend we will use the url: https://reqres.in/api/login

Using axios we will make a post request to the url with the following body:
{
 "email": "eve.holt@reqres.in",
 "password": "cityslicka"
}

If the request is successful we will get a response with the following body:
{
 "token": "QpwL5tke4Pnpja7X4"
}
*/
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { userLogin } from "../actions/authAction"
import { RootState } from "../store"

interface userState {
  loading: boolean
  userToken: string | null
  userInfo: any
  error: string | null
  sucess: boolean
}

const initialState: userState = {
  loading: false,
  userToken: null,
  userInfo: null,
  error: null,
  sucess: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(userLogin.pending, (state) => {
      state.loading = true
    })
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.loading = false
      state.userToken = action.payload.token
      state.sucess = true
    })
    builder.addCase(userLogin.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false
      state.error = action.payload
    })
  },
})

export const selectUserToken = (state: RootState) => state.auth.userToken
export const authReducer = authSlice.reducer
