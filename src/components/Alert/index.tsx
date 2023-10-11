import React from 'react';
import {
  MdErrorOutline,
  MdWarningAmber,
  MdOutlineInfo,
  MdTaskAlt,
} from 'react-icons/md';

import * as S from './styled';

export type SeverityType = 'error' | 'warning' | 'info' | 'success';

interface AlertProps {
  severity?: SeverityType;
  visible?: boolean;
  icon?: React.ReactNode | boolean;
  onClose?: () => void;
  children?: React.ReactNode;
}

function Alert({
  severity = 'info',
  visible = false,
  icon,
  onClose,
  children,
}: AlertProps) {
  const getIcon = () => {
    if (icon !== undefined) return icon || null;
    switch (severity) {
      case 'error':
        return <MdErrorOutline size="1.375rem" color="#d32f2fff" />;
      case 'warning':
        return <MdWarningAmber size="1.375rem" color="#ed6c02ff" />;
      case 'info':
        return <MdOutlineInfo size="1.375rem" color="#0288d1ff" />;
      case 'success':
        return <MdTaskAlt size="1.375rem" color="#2e7d32ff" />;
    }
  };
  const renderIcon = getIcon();

  return (
    <S.Container severity={severity} visible={visible}>
      {renderIcon && <S.IconContainer>{renderIcon}</S.IconContainer>}
      <S.Value>{children}</S.Value>
      {onClose && (
        <S.ButtonContainer severity={severity} onClick={onClose}>
          <S.Button />
        </S.ButtonContainer>
      )}
    </S.Container>
  );
}

export default Alert;
