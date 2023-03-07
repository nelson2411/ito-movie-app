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

import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
  loading: false,
  error: null,
  userToken: null,
  userInfo: null,
  sucess: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {},
})
