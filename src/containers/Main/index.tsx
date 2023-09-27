import React from 'react';
import logo from '../../assets/logo.svg';

import * as S from './styled';

function Main() {
  return (
    <S.App>
      <S.Header>
        <S.Logo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <S.Link
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </S.Link>
      </S.Header>
    </S.App>
  );
}

export default Main;
