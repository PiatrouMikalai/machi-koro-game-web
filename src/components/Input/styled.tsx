import styled from 'styled-components';

export const Label = styled.label`
  box-sizing: border-box;
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  //line-height: 1.5rem;
  text-align: start;
  color: ${(props) => props?.theme?.error || '#000000FF'};
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.375rem 0.75rem;

  font-size: 0.875rem;
  line-height: 1.5rem;

  outline: 2px solid transparent;
  outline-offset: 2px;
  border-width: 0;
  border-radius: 0.375rem;
  border-color: ${(props) => props?.theme?.error || '#6b7280ff'};
  box-shadow:
    #ffffffff 0 0 0 0 inset,
    ${(props) => props?.theme?.error || '#d1d5dbff'} 0 0 0 1px inset,
    #0000000c 0 1px 2px 0;

  &:focus {
    border-color: ${(props) => props?.theme?.error || '#2563eb'};
    box-shadow:
      #ffffffff 0 0 0 0 inset,
      ${(props) => props?.theme?.error || '#4F46E5FF'} 0 0 0 1px inset,
      #0000000c 0 1px 2px 0;
  }
`;

export const InputMessage = styled.span`
  box-sizing: border-box;
  display: flex;
  font-size: 0.75rem;
  letter-spacing: 0.025em;
  line-height: 1.5;
  font-weight: 300;
  color: ${(props) => props?.theme?.error || '#000000FF'};
  visibility: ${(props) => (props?.theme?.error ? 'visible' : 'hidden')};
  margin: ${(props) => (props?.theme?.error ? '0.25rem 0 0 0.25rem' : '0')};
`;

export const InputWithLabelContainer = styled.div<{ position?: string }>`
  margin-top: 0.5rem;
  position: ${(props) => props?.position || 'static'};
`;

export const InputIconContainer = styled.div<{ width?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width || '2rem'};
  cursor: pointer;
`;
