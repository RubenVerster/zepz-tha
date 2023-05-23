import { createSlice } from '@reduxjs/toolkit';
import PrimeReact from 'primereact/api';
import { UserState } from '../../types';

const initialState: UserState = {
  status: 'idle',
  theme: 'dark',
  sidebarVisible: false,
  extractedUsers: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      PrimeReact?.changeTheme?.(
        `lara-${state.theme}-blue`,
        `lara-${state.theme === 'dark' ? 'light' : 'dark'}-blue`,
        'app-theme',
        () => {
          console.log('User Changed Theme');
        }
      );
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
    toggleSidebar: (state) => {
      state.sidebarVisible = !state.sidebarVisible;
    },
    setExtractedUsers: (state, action) => {
      state.extractedUsers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setExtractedUsers, toggleTheme, toggleSidebar } = userSlice.actions;

export default userSlice.reducer;
