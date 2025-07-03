import { renderHook } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { useAuth } from '../useAuth';
import authSlice from '@/store/authSlice';
import { commonApi } from '@/api/commom.api';

const createMockStore = (userToken: string | null = null) => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [commonApi.reducerPath]: commonApi.reducer,
    },
    preloadedState: {
      auth: {
        userToken,
        expire: null,
      },
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(commonApi.middleware),
  });
};

describe('useAuth Hook', () => {
  it('returns isAuth as false when no token', () => {
    const store = createMockStore();
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isAuth).toBe(false);
  });

  it('returns isAuth as true when token exists', () => {
    const store = createMockStore('mock-token');
    
    const { result } = renderHook(() => useAuth(), {
      wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    });

    expect(result.current.isAuth).toBe(true);
  });
});