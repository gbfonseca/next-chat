import { AxiosInstance, AxiosPromise } from 'axios';

import User from '../models/user';

type SigninDataType = {
  email: string;
  password: string;
};

type SignInReponse = {
  user: User;
  token: string;
};

export const AuthService = {
  signIn(
    api: AxiosInstance,
    signInData: SigninDataType,
  ): AxiosPromise<SignInReponse> {
    return api.post('/auth/signin', signInData);
  },

  getLoggedUser(api: AxiosInstance): AxiosPromise<User> {
    return api.get('/auth/logged-user');
  },
};
