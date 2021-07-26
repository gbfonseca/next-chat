import { InputHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
};

function Input({ register, name, placeholder, ...rest }: InputProps) {
  return (
    <S.Container>
      <S.Input
        {...register(name as string)}
        placeholder={placeholder}
        {...rest}
      />
    </S.Container>
  );
}

export default Input;
