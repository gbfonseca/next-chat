import { InputHTMLAttributes, ReactElement } from 'react';

import * as S from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({ placeholder, ...rest }: InputProps): ReactElement {
  return (
    <S.Container>
      <S.Input placeholder={placeholder} {...rest} />
    </S.Container>
  );
}

export default Input;
