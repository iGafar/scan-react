import { commonApi } from '@/api/commom.api';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

import authSlice from './authSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  [commonApi.reducerPath]: commonApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(commonApi.middleware),
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
