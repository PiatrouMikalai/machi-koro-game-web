import React from 'react';
import zxcvbn from 'zxcvbn';

import * as S from './styled';

interface PasswordStrengthBarProps {
  password: string;
  minLength?: number;
  validationMessage?: React.ReactNode | string;
}

export enum PasswordScore {
  Short = 0,
  Weak = 1,
  Okay = 2,
  Good = 3,
  Strong = 4,
}

enum PasswordScoreTitle {
  Short = 'Too short',
  Weak = 'Weak',
  Okay = 'Okay',
  Good = 'Good',
  Strong = 'Strong',
}

function PasswordStrengthBar({
  password = '',
  minLength = 4,
  validationMessage = '',
}: PasswordStrengthBarProps) {
  const zxcvbnObject = zxcvbn(password);

  const getScore = () => {
    if (minLength && password?.length < minLength) {
      return PasswordScore.Short;
    }

    return zxcvbnObject?.score || PasswordScore.Weak;
  };

  const getPasswordScoreTitle = (score: PasswordScore): string | undefined => {
    const title = Object.keys(PasswordScore).find(
      (key) => PasswordScore[key as keyof typeof PasswordScore] === score
    );
    return title
      ? PasswordScoreTitle[title as keyof typeof PasswordScoreTitle]
      : undefined;
  };

  const score: PasswordScore = getScore();
  const scoreValue = getPasswordScoreTitle(score);

  return (
    <S.Container score={score}>
      <S.BarItem1 />
      <S.BarItem2 />
      <S.BarItem3 />
      <S.BarItem4 />
      <S.TitleContainer visible={!!password?.length}>
        {validationMessage}
        <S.Title>{scoreValue || ''}</S.Title>
      </S.TitleContainer>
    </S.Container>
  );
}

export default PasswordStrengthBar;
