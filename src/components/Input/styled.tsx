import styled, { css } from 'styled-components';

export const Label = styled.label`
  box-sizing: border-box;
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5rem;
  text-align: start;
`;

export const Input = styled.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0;
  padding: 0.375rem 0.75rem;

  font-size: 0.875rem;
  line-height: 1.5rem;

  border-width: 0;
  border-radius: 0.375rem;
  border-color: #6b7280;
  box-shadow:
    rgb(255, 255, 255) 0 0 0 0 inset,
    rgb(209, 213, 219) 0 0 0 1px inset,
    rgba(0, 0, 0, 0.05) 0 1px 2px 0;

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-color: #2563eb;
    box-shadow:
      rgb(255, 255, 255) 0 0 0 0 inset,
      rgb(79, 70, 229) 0 0 0 2px inset,
      rgba(0, 0, 0, 0.05) 0 1px 2px 0;
  }
`;

export const InputMessage = styled.span`
  box-sizing: border-box;
  display: flex;
  font-size: 0.75rem;
  letter-spacing: 0.025em;
  line-height: 1.5;
  font-weight: 500;
  margin: 0.25rem 0 0 0.25rem;
`;

export const InputWithLabelContainer = styled.div`
  margin-top: 0.5rem;
`;

export const InputValidationContainer = styled.div<{ error?: boolean }>`
  ${(props) =>
    props?.error
      ? css`
          label {
            color: #f56565;
          }
          input,
          input:focus {
            outline: 2px solid transparent;
            outline-offset: 2px;
            border-color: #f56565;
            box-shadow:
              rgb(255, 255, 255) 0 0 0 0 inset,
              #f56565 0 0 0 2px inset,
              rgba(0, 0, 0, 0.05) 0 1px 2px 0;
          }
          span {
            color: #f56565;
            visibility: visible;
          }
        `
      : css`
          span {
            visibility: hidden;
          }
        `}
`;
