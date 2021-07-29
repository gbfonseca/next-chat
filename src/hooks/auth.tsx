import {
  ReactNode,
  createContext,
  ReactElement,
  useContext,
  useState,
} from 'react';
import { useEffect } from 'react';

import Router from 'next/router';
import { setCookie, parseCookies } from 'nookies';

import User from '../models/user';
import { api } from '../services/api';
import { AuthService } from '../services/auth';

type AuthProviderType = {
  children: ReactNode;
};

type SigninDataType = {
  email: string;
  password: string;
};

interface AuthContextData {
  user: User;
  isAuthenticated: boolean;
  signIn(signInData: SigninDataType): void;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderType): ReactElement {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    (async () => {
      const { 'nextchat.token': token } = parseCookies();
      if (token) {
        AuthService.getLoggedUser(api).then((response) => {
          const responseUser = response.data;
          setUser(responseUser);
        });
      }
    })();
  }, []);

  function signIn(signInData: SigninDataType): void {
    AuthService.signIn(api, signInData).then((response) => {
      const userResponse = response.data.user;
      const token = response.data.token;
      setUser(userResponse);
      setCookie(undefined, 'nextchat.token', token, {
        maxAge: 60 * 60 * 1, // hour
      });
      api.defaults.headers.Authorization = `Bearer ${token}`;

      Router.push('/home');
    });
  }

  return (
    <AuthContext.Provider value={{ user, signIn, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
