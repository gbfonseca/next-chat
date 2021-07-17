import { ReactElement } from 'react';
import { useForm } from 'react-hook-form';

import { Button, Input } from '../../components/';

import * as S from './styles';

type DataType = {
  email: string;
  password: string;
};

function SignIn(): ReactElement {
  const { register, handleSubmit } = useForm<DataType>();

  const onSubmit = (data: DataType) => {
    console.log(data);
  };

  return (
    <S.Container>
      <S.AuthBox>
        <S.Title>Logar</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Input {...register('email')} type="email" placeholder="E-mail" />
          <Input
            {...register('password')}
            type="password"
            placeholder="Senha"
          />
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
        </S.Form>
      </S.AuthBox>
    </S.Container>
  );
}

export default SignIn;
