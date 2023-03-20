import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { fetchWrapper } from "../utils/api.utils";

const name = "stockPriceData";

const initialState = createInitialState();
const reducers = createReducers();
const extraActions = createExtraActions();

const slice = createSlice({
  name,
  initialState,
  reducers,
  extraReducers: (builder) => createExtraReducers(builder),
});

function createInitialState() {
  return {
    stockPriceData: {},
    error: null,
  };
}

function createReducers() {
  return { resetState };
  function resetState() {}
}

function createExtraActions() {
  const apiUrl = `https://finfree.app/demo`;

  return {
    getStockPriceData: getStockPriceData(),
  };

  function getStockPriceData() {
    return createAsyncThunk(`${name}/getStockPriceData`, async () => {
      const response = await fetchWrapper.get({
        url: apiUrl,
      });
      return response;
    });
  }
}

function createExtraReducers(builder) {
  const { getStockPriceData } = extraActions;
  builder
    .addCase(getStockPriceData.pending, (state) => {
      state.loading = true;
      state.error = false;
    })
    .addCase(getStockPriceData.fulfilled, (state, action) => {
      state.loading = false;
      state.stockPriceData = action.payload;
    })
    .addCase(getStockPriceData.rejected, (state, action) => {
      state.error = action.error;
      state.loading = false;
    });
}

export const stockPriceDataActions = { ...slice.actions, ...extraActions };
export const stockPriceDataReducer = slice.reducer;
