import { ReactElement } from 'react';
import { useState } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import * as S from './styles';

import { Button, Input, Loading } from '../../components/';
import { useAuth } from '../../hooks/auth';

type DataType = {
  email: string;
  password: string;
};

const schema = Yup.object({
  email: Yup.string().email('Insira um e-mail válido.'),
  password: Yup.string().required('Senha obrigatória.'),
});

function SignIn(): ReactElement {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit } = useForm<DataType>({
    resolver: yupResolver(schema),
  });
  const { signIn } = useAuth();
  const onSubmit = async (data: DataType) => {
    try {
      setLoading(true);
      await signIn(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <S.Container>
      <S.AuthBox>
        <S.Title>Logar</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            name="email"
            type="email"
            placeholder="E-mail"
          />
          <Input
            register={register}
            name="password"
            type="password"
            placeholder="Senha"
          />
          {loading ? (
            <Loading />
          ) : (
            <Button
              style={{
                width: '100%',
                maxWidth: '100%',
                marginTop: 20,
                marginBottom: 20,
              }}
              type="submit"
            >
              Entrar
            </Button>
          )}
        </S.Form>
      </S.AuthBox>
    </S.Container>
  );
}

export default SignIn;
