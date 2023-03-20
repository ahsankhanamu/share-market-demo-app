import { configureStore } from "@reduxjs/toolkit";

import { stockPriceDataReducer } from "./stockData.slice";

export * from "./stockData.slice";

export const store = configureStore({
  reducer: {
    stockPriceData: stockPriceDataReducer,
  },
});
