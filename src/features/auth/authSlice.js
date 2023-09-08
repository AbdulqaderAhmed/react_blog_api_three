import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../api/http";

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/auth/register", userData);
      if (res.data) return res.data;
    } catch (error) {
      const message =
        (error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, thunkApi) => {
    try {
      const res = await http.post("/aut/login", userData);
      if (res.data) {
        localStorage.setItem("user", JSON.stringify(res.data));
        return res.data;
      }
    } catch (error) {
      const message =
        (error.response.data &&
          error.response.data &&
          error.response.data.message) ||
        error.toString();
      return thunkApi.rejectWithValue(message);
    }
  }
);

const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  isError: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
    },
    [registerUser.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.user = payload.payload;
      state.isError = null;
    },
    [registerUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isError = payload.payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
    },
    [loginUser.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.user = payload.payload;
      state.isError = null;
    },
    [loginUser.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isError = payload.payload;
    },
  },
});

export default authSlice.reducer;
