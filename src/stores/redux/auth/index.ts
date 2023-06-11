import { User } from "@/interfaces/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const AuthRedux = createSlice({
  name: "auth",
  initialState: {
    user: <User | null>null,
  },
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { SetUser } = AuthRedux.actions;
export default AuthRedux.reducer;
