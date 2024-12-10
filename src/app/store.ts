import { configureStore } from '@reduxjs/toolkit';
// import analyticsReducer from '../features/analytics/analyticsSlice';
import analyticsReducer from '../features/analytics/analyticSlice';
import usersReducer from '../features/users/userSlice';
import authReducer from '../features/auth/authSlice';
// import themeReducer from "../features/auth/themeSlice"
export const store = configureStore({
  reducer: {
    analytics: analyticsReducer,
    users: usersReducer,
    auth: authReducer,
    // theme: themeReducer,  
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

