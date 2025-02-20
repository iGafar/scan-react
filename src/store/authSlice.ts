import { ILoginData } from '@/api/controllers/account-controller/account-controller.types';
import { createSlice } from '@reduxjs/toolkit';

export const enum UserEnum {
  USER_TOKEN = 'userToken',
  TOKEN_EXPIRE = 'tokenExpire',
}

interface InitialStateType {
  userToken: string | null;
  expire: string | null;
}

const initialState: InitialStateType = {
  userToken: localStorage.getItem(UserEnum.USER_TOKEN),
  expire: localStorage.getItem(UserEnum.TOKEN_EXPIRE),
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserLogout: state => {
      localStorage.removeItem(UserEnum.USER_TOKEN);
      localStorage.removeItem(UserEnum.TOKEN_EXPIRE);

      state.userToken = null;
    },
    setUserLogin: (state, { payload }: { payload: ILoginData }) => {
      localStorage.setItem(
        UserEnum.USER_TOKEN,
        JSON.stringify(payload.accessToken),
      );
      localStorage.setItem(UserEnum.TOKEN_EXPIRE, payload.expire);

      state.userToken = payload.accessToken;
      state.expire = payload.expire;
    },
  },
});

export const { setUserLogout, setUserLogin } = authSlice.actions;

export default authSlice.reducer;
