import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import airlineReducer from "./airlines/airlinesSlice";

export const store = configureStore({
  reducer: {
    airlines: airlineReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
