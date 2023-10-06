import styled, { css } from 'styled-components';
import { PasswordScore } from './index';

export const BarItem = styled.span`
  height: 2px;
  background-color: #ddd;
`;

export const BarItem1 = styled(BarItem)`
  grid-area: barItem1;
`;
export const BarItem2 = styled(BarItem)`
  grid-area: barItem2;
`;
export const BarItem3 = styled(BarItem)`
  grid-area: barItem3;
`;
export const BarItem4 = styled(BarItem)`
  grid-area: barItem4;
`;

export const TitleContainer = styled.div<{ visible?: boolean }>`
  grid-area: title;
  display: flex;
  justify-content: space-between;
  min-height: 1rem;
  visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};

  font-size: 0.75rem;
  letter-spacing: 0.025em;
  font-weight: 300;
  line-height: 1.5;
`;

export const Title = styled.span`
  margin-left: auto;
  color: #6b7280ff;
`;
export const Container = styled.div<{
  score: PasswordScore;
}>`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas:
    'barItem1 barItem2 barItem3 barItem4'
    'title title title title';
  grid-gap: 0 0.5rem;
  margin-top: 0.25rem;
  ${(props) => {
    switch (props.score) {
      case PasswordScore.Short:
        break;
      case PasswordScore.Weak:
        return css`
          ${BarItem}:nth-child(1) {
            background-color: #ef4836;
          }
        `;
      case PasswordScore.Okay:
        return css`
          ${BarItem}:nth-child(-n + 2) {
            background-color: #f6b44d;
          }
        `;
      case PasswordScore.Good:
        return css`
          ${BarItem}:nth-child(-n + 3) {
            background-color: #2b90ef;
          }
        `;
      case PasswordScore.Strong:
        return css`
          ${BarItem} {
            background-color: #25c281;
          }
        `;
    }
  }}
`;
