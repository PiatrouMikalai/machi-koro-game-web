import React from 'react';
import loginBackground from '../../assets/login-background.png';

import * as S from './styled';

interface LoginPageProps {
  children: React.ReactNode;
}

function LoginPage({ children }: LoginPageProps) {
  return (
    <S.Container>
      <S.Background src={loginBackground} alt="login-background.png" />
      <S.FormContainer>{children}</S.FormContainer>
    </S.Container>
  );
}

export default LoginPage;
