import styled from 'styled-components';
export const TermsOfServiceTitle = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  line-height: 1.5rem;
  text-align: start;
  color: ${(props) => props?.theme?.error || '#6b7280'};

  a {
    font-weight: 400;
  }
`;

export const TermsElementContainer = styled.div`
  margin-top: 0.75rem;
`;
