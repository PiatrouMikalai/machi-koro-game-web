import React, { FC, ButtonHTMLAttributes } from 'react';

import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = (props) => {
  return <S.Button {...props} />;
};

export default Button;
