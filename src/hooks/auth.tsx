import { ReactNode } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { ReactElement } from 'react';
import { createContext } from 'react';
import User from '../models/user';
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
  signed: boolean;
  signIn(signInData: SigninDataType): Promise<void>;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderType): ReactElement {
  const [user, setUser] = useState<User>({} as User);
  async function signIn(signInData: SigninDataType): Promise<void> {
    const response = await AuthService.signIn(signInData);
    const userResponse = response.data.user;
    const token = response.data.token;
    // console.log(token);
    setUser(userResponse);
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signed: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  return context;
}
