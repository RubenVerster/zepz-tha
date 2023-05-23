import { createSlice } from '@reduxjs/toolkit';
import PrimeReact from 'primereact/api';

export interface UserState {
  status: 'idle' | 'loading' | 'complete';
  theme: 'dark' | 'light';
}

const initialState: UserState = {
  status: 'idle',
  theme: 'dark',
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
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme } = userSlice.actions;

export default userSlice.reducer;
