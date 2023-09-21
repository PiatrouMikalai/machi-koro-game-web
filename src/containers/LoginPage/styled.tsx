import styled from 'styled-components';

export const Container = styled.div``;
export const Background = styled.img`
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
`;

export const FormContainer = styled.div`
  width: 480px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255,255,255,0.9);
  padding: 3rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0) 0 0 0 0, rgba(0, 0, 0, 0.1) 0 1px 3px 0, rgba(0, 0, 0, 0.1) 0 1px 2px -1px;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  letter-spacing: -0.025em;
  line-height: 2.25rem;
  font-weight: 700;
  margin: 0 0 2.5rem 0;
  color: rgb(17, 24, 39);
`;

export const FormElementContainer = styled.div`
  margin-top: 1.5rem;
`;

export const RouteMessage = styled.p`
  margin: 1rem 0 0 0;
  color: rgb(107, 114, 128);
  font-size: 0.875rem;
  line-height: 1.5rem;
`;