import React, { FC, ButtonHTMLAttributes, memo } from 'react';

import * as S from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const Button: FC<ButtonProps> = ({ children, ...rest }) => {
  return <S.Button {...rest}>{children}</S.Button>;
};

export default memo(Button);
