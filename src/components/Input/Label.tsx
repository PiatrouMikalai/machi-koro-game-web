import React, { FC, LabelHTMLAttributes, memo } from 'react';

import * as S from './styled';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children?: React.ReactNode;
}

const Label: FC<LabelProps> = ({ children, ...rest }) => {
  return <S.Label {...rest}>{children}</S.Label>;
};

export default memo(Label);
