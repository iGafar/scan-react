import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import CardUser from '../index';
import { commonApi } from '@/api/commom.api';
import authSlice from '@/store/authSlice';

// Mock данные для API
const mockUserInfo = {
  usedCompanyCount: 5,
  companyLimit: 100,
};

// Создаем mock store
const createMockStore = (apiState = {}) => {
  return configureStore({
    reducer: {
      auth: authSlice,
      [commonApi.reducerPath]: () => apiState,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(commonApi.middleware),
  });
};

// Mock для useGetUserInfoQuery
jest.mock('@/api/controllers/account-controller/account-controller', () => ({
  useGetUserInfoQuery: () => ({
    data: mockUserInfo,
    isLoading: false,
  }),
}));

describe('CardUser Component', () => {
  it('renders user info correctly when data is loaded', () => {
    const store = createMockStore();
    
    render(
      <Provider store={store}>
        <CardUser />
      </Provider>
    );

    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Использовано компаний')).toBeInTheDocument();
    expect(screen.getByText('Лимит по компаниям')).toBeInTheDocument();
  });
});