import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  box-sizing: border-box;
  border-width: 0;
  padding: 0.375rem 0.75rem;
  background-color: rgb(79, 70, 229);
  color: rgb(255, 255, 255);
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  cursor: pointer;

  &:hover {
    background-color: rgb(99, 102, 241);
  }
`;
