import { AxiosPromise } from 'axios';
import User from '../models/user';
import api from './api';

type SigninDataType = {
  email: string;
  password: string;
};

type SignInReponse = {
  user: User;
  token: string;
};

export const AuthService = {
  signIn(signInData: SigninDataType): AxiosPromise<SignInReponse> {
    return api.post('/auth/signin', signInData);
  },
};
