import { configureStore } from "@reduxjs/toolkit";
import AuthRedux from "./redux/auth";

export const store = configureStore({
  reducer: {
    authRedux: AuthRedux,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
