import { ILoginData } from '@/api/controllers/account-controller/account-controller.types';
import { createSlice } from '@reduxjs/toolkit';

export const enum UserEnum {
  USER_TOKEN = 'userToken',
  USER_INFO = 'userInfo',
}

interface InitialStateType {
  userToken: string | null;
}

const initialState: InitialStateType = {
  userToken: localStorage.getItem(UserEnum.USER_TOKEN),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLogout: state => {
      localStorage.removeItem(UserEnum.USER_TOKEN);

      state.userToken = null;
    },
    setUserLogin: (state, { payload }: { payload: ILoginData }) => {
      localStorage.setItem(
        UserEnum.USER_TOKEN,
        JSON.stringify(payload.accessToken),
      );
      state.userToken = payload.accessToken;
    },
  },
});

export const { setUserLogout, setUserLogin } = authSlice.actions;

export default authSlice.reducer;
