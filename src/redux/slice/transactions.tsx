import { createSlice } from "@reduxjs/toolkit";

interface TransactionsProps {
  id: string;
  description: string;
  amount: number;
  category: string;
  date: Date;
  transactionType: string;
}
const INITIAL_STATE: TransactionsProps[] = [];

const transactionSlice = createSlice({
  name: "transaction",
  initialState: INITIAL_STATE,
  reducers: {
    addTransaction: (state, { payload }) => {
      return [payload, ...state];
    },
    removeTransaction: (state, { payload }) => {
      return (state = state.filter((item: any) => item.id !== payload));
    },
  },
});

export const { addTransaction, removeTransaction } = transactionSlice.actions;
export default transactionSlice.reducer;
