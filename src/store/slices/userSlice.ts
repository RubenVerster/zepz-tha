import { createSlice } from '@reduxjs/toolkit';
import PrimeReact from 'primereact/api';
import { UserState } from '../../types';

const initialState: UserState = {
  status: 'idle',
  theme: 'dark',
  sidebarVisible: false,
  extractedUsers: [],
  loading: false,
  error: null,
  errorMessage: '',
  filter: '',
  filterBlocked: false,
  filterFavourite: false,
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
      const usersById = new Map();

      [...state.extractedUsers, ...action.payload].forEach((user) => {
        usersById.set(user.id, user);
      });

      state.extractedUsers = Array.from(usersById.values());
    },
    handleUserBlock: (state, action) => {
      const user = state.extractedUsers.find((user) => user.id === action.payload);
      if (user) {
        if (!user.blocked) {
          user.favourite = false;
        }
        user.blocked = !user.blocked;
      }
    },
    toggleUserFavourite: (state, action) => {
      const user = state.extractedUsers.find((user) => user.id === action.payload);
      if (user) {
        user.favourite = !user.favourite;
      }
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    toggleUserBlockedFilter: (state) => {
      if (state.filterFavourite) {
        state.filterFavourite = !state.filterFavourite;
      }
      state.filterBlocked = !state.filterBlocked;
    },
    toggleUserFavouriteFilter: (state) => {
      if (state.filterBlocked) {
        state.filterBlocked = !state.filterBlocked;
      }
      state.filterFavourite = !state.filterFavourite;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setLoading,
  setExtractedUsers,
  toggleTheme,
  toggleSidebar,
  handleUserBlock,
  toggleUserFavourite,
  setError,
  setErrorMessage,
  setFilter,
  toggleUserBlockedFilter,
  toggleUserFavouriteFilter,
} = userSlice.actions;

export default userSlice.reducer;
