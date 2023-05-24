import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import userSlice from './slices/userSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default: localStorage if web

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: userSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  const store = configureStore({
    reducer: persistedReducer,
    preloadedState,
  });

  const persistor = persistStore(store);
  return { store, persistor };
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>['store'];
export type Persistor = ReturnType<typeof setupStore>['persistor'];
export type AppDispatch = AppStore['dispatch'];
