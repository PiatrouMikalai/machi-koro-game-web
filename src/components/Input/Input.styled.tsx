import styled from 'styled-components';

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

export const InputWithLabelContainer = styled.div`
  margin-top: 0.5rem;
`;
