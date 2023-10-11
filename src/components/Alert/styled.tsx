import styled, { css } from 'styled-components';
import { SeverityType } from './index';
import { MdClose } from 'react-icons/md';

enum TextColor {
  Error = '#5f2120ff',
  Warning = '#663c00ff',
  Info = '#014361ff',
  Success = '#1e4620ff',
}
export const Container = styled.div<{
  severity?: SeverityType;
  visible?: boolean;
}>`
  display: ${(props) => (props?.visible ? 'flex' : 'none')};
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 0.375rem 1rem;

  font-size: 0.875rem;
  font-weight: 400;

  ${(props) => {
    switch (props.severity) {
      case 'error':
        return css`
          background-color: #fdededff;
          color: ${TextColor.Error};
        `;
      case 'warning':
        return css`
          background-color: #fff4e5ff;
          color: ${TextColor.Warning};
        `;
      case 'info':
        return css`
          background-color: #e5f6fdff;
          color: ${TextColor.Info};
        `;
      case 'success':
        return css`
          background-color: #edf7edff;
          color: ${TextColor.Success};
        `;
    }
  }}
`;

export const Value = styled.div`
  padding: 0.5rem 0;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: -0.5rem;
`;

export const Button = styled.button<{ severity?: SeverityType }>`
  display: flex;
  align-items: center;
  height: fit-content;
  box-sizing: border-box;
  padding: 0.3rem;
  cursor: pointer;

  outline: none;
  border: none;
  border-radius: 50%;
  background-color: transparent;
  color: ${(props) => {
    switch (props.severity) {
      case 'error':
        return TextColor.Error;
      case 'warning':
        return TextColor.Warning;
      case 'info':
        return TextColor.Info;
      case 'success':
        return TextColor.Success;
    }
  }};
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

export const ButtonIcon = styled(MdClose)`
  height: 1.25rem;
  width: 1.25rem;
`;
