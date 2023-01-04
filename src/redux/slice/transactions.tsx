import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE: any = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    addTransaction: (state, { payload }) => {
      return [...state, payload];
    },
  },
});

export const { addTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
