import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { asyncCount } from "../../api/counter";

const addAsyncWithStatus = createAsyncThunk(
  "counter/asyncCount",
  async (payload) => {
    const response = await asyncCount(payload);
    return response.data;
  }
);

const counter = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    status: "",
  },
  reducers: {
    add(state, { payload }) {
      state.count = state.count + payload;
      // const newState = { ...state };
      // newState.count = state.count + payload
      // return newState;
    },
    minus(state, { payload }) {
      state.count = state.count - payload;
      // const newState = { ...state };
      // newState.count = state.count - payload
      // return newState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addAsyncWithStatus.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addAsyncWithStatus.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.count = state.count + action.payload;
      })
      .addCase(addAsyncWithStatus.rejected, (state) => {
        state.status = "failed";
      });
  },
});

const { add, minus } = counter.actions;

export { add, minus, addAsyncWithStatus as addAsync };
export default counter.reducer;
