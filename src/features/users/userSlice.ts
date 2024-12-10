import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface User {
  id: string;
  name: string;
  email: string;
  status: "active" | "inactive" | "pending" | "deleted";
  region: string; // Example for user region
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [
    { id: "1", name: "John Doe", email: "john@example.com", status: "active", region: "North" },
    { id: "2", name: "Jane Smith", email: "jane@example.com", status: "inactive", region: "South" },
    { id: "3", name: "Alice Johnson", email: "alice@example.com", status: "pending", region: "East" },
  ],
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
    updateUserStatus: (state, action: PayloadAction<{ id: string, status: "active" | "inactive" | "pending" | "deleted" }>) => {
      const user = state.users.find(user => user.id === action.payload.id);
      if (user) {
        user.status = action.payload.status;
      }
    },
    updateUserRegion: (state, action: PayloadAction<{ id: string, region: string }>) => {
      const user = state.users.find(user => user.id === action.payload.id);
      if (user) {
        user.region = action.payload.region;
      }
    },
    deleteUser: (state, action: PayloadAction<string>) => {
      // Filter out the user with the specified id
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
});

export const { addUser, updateUserStatus, updateUserRegion, deleteUser } = userSlice.actions;
export default userSlice.reducer;
