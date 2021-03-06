import styled from 'styled-components'

import { theme } from '../../../utils/themes'

export const Body = styled.div`
  padding-left: 65px;
  position: relative;
  height: 100vh;
  background: ${theme('body_bg')};
  transition: background-color 0.3s;
`

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  &:focus {
    outline: 0;
  }
`
