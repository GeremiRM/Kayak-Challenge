import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import fetchJsonp from "fetch-jsonp";

import { AllianceType } from "../../types/alliance";
import { Airline } from "../../types/airline";

const API_URL =
  "https://www.kayak.com/h/mobileapis/directory/airlines/homework";

export interface AirlinesState {
  airlines: Airline[];
  filters: AllianceType[];
  status: "idle" | "loading" | "failed";
}

export const initialState: AirlinesState = {
  airlines: [],
  filters: [],
  status: "idle",
};

export const fetchData = createAsyncThunk("airlines/fetchData", async () => {
  const data = await fetchJsonp(API_URL, { jsonpCallback: "jsonp" });
  return await data.json();
});

export const airlinesSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {
    changeFilter: (state, action: PayloadAction<AllianceType>) => {
      // Check if filter (action.payload) is active
      // If it is, remove that filter
      // If it is not, add it to the list
      state.filters = state.filters.includes(action.payload)
        ? state.filters.filter((filter) => filter !== action.payload)
        : state.filters.concat(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.status = "idle";
      state.airlines = action.payload;
    });
  },
});

export const { changeFilter } = airlinesSlice.actions;

export const selectAirlines = (state: RootState) => state.airlines;

export default airlinesSlice.reducer;
