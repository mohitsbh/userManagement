// src/features/analytics/analyticsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AnalyticsState {
  totalUsers: number;
  activeUsers: number;
  deletedUsers: number;
}

const initialState: AnalyticsState = {
  totalUsers: 100,
  activeUsers: 80,
  deletedUsers: 20,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    setUserStats: (state, action: PayloadAction<AnalyticsState>) => {
      state.totalUsers = action.payload.totalUsers;
      state.activeUsers = action.payload.activeUsers;
      state.deletedUsers = action.payload.deletedUsers;
    },
  },
});

export const { setUserStats } = analyticsSlice.actions;
export default analyticsSlice.reducer;
