import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { http } from "../../../api/http";

export const getBlogs = createAsyncThunk(
  "blog/getBlogs",
  async (token, thunkApi) => {
    try {
      const res = await http("/blog", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.data) {
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

export const createBlog = createAsyncThunk(
  "blog/createBlog",
  async (blogData, thunkApi) => {
    try {
      const token = thunkApi.getState().auth.user.user.token;
      const res = await http.post("/blog", blogData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data) {
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

const initialState = {
  data: null,
  isLoading: false,
  isError: null,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: {
    [getBlogs.pending]: (state) => {
      state.isLoading = true;
    },
    [getBlogs.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.data = payload.payload;
      state.isError = null;
    },
    [getBlogs.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isError = payload.payload;
    },
    [createBlog.pending]: (state) => {
      state.isLoading = true;
    },
    [createBlog.fulfilled]: (state, payload) => {
      state.isLoading = false;
      state.data = payload.payload;
      state.isError = null;
    },
    [createBlog.rejected]: (state, payload) => {
      state.isLoading = false;
      state.isError = payload.payload;
    },
  },
});

export default blogSlice.reducer;
