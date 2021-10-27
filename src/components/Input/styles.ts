import styled from 'styled-components';
import { animated } from 'react-spring'
export const Container = styled.div`
  background: var(--input-primary-bg);
  border-radius: 16px;
  height: 75px;
  width: 365px;
  display: flex;
  align-items: center;
`;

export const Label = styled(animated.label)`
  color: #6E7191;
  font-size: 1rem;
  font-family: var(--primary-font-family);
  position: relative;
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
 
`
export const Input = styled(animated.input)`
  opacity: 0;
  color: #14142b;
  width: 200px;
  height: 20px;
  position: relative;
  border: none;
  background: var(--input-primary-bg);
  right: 40px
 
`
