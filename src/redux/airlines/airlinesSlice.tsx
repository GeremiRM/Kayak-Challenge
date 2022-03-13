import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import fetchJsonp from "fetch-jsonp";

import { AllianceType } from "../../types/alliance";
import { Airline } from "../../types/airline";

const API_URL =
  "https://www.kayak.com/h/mobileapis/directory/airlines/homework";

export interface AirlinesState {
  airlines: Airline[];
  filter: AllianceType;
  status: "idle" | "loading" | "failed";
}

export const initialState: AirlinesState = {
  airlines: [],
  filter: "none",
  status: "idle",
};

export const fetchData = createAsyncThunk("airlines/fetchData", async () => {
  const data = await fetchJsonp(API_URL, { jsonpCallback: "jsonp" });
  return await data.json();
});

export const airlinesSlice = createSlice({
  name: "airlines",
  initialState,
  reducers: {},
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

export const selectAirlines = (state: RootState) => state.airlines;

export default airlinesSlice.reducer;
