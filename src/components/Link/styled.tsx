import styled, {css} from 'styled-components';
import { Link as ReactRouterLink } from 'react-router-dom';

const linkStyle = css`
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.5rem;
  color: rgb(79, 70, 229);
  text-decoration: inherit;

  &:hover {
    color: rgb(99, 102, 241);
  }
`
export const Link = styled.a`
  ${linkStyle}
`;

export const RouterLink = styled(ReactRouterLink)`
  ${linkStyle}
`