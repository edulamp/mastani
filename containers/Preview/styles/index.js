import styled from 'styled-components'

import { theme } from '../../../utils/themes'

function doTransform(visible) {
  return visible ? 'translate(0px, 0px)' : 'translate(105%, 0px)'
}

export const PreviewOverlay = styled.div`
  bottom: 0;
  left: 0;
  overflow: auto;
  position: absolute;
  height: 100%;
  right: 0;
  z-index: 1001;
  top: 0;
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`
// z-index: 1001;
// z-index: ${props => (props.visible ? 1001 : -1)};
// display: ${props => (props.visible ? 'block' : 'none')};
// visibility: ${props => (props.visible ? 'visible' : 'hidden')};

export const PreviewWrapper = styled.div`
  color: ${theme('preview.font')};
  box-sizing: border-box;
  transition: transform 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  font-family: Roboto, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  height: 100%;
  width: ${props => (props.type === 'post' ? '70%' : '40%')};
  right: 0;
  position: fixed;
  transform: ${props => doTransform(props.visible)};
  top: 0px;
  overflow: auto;
  z-index: 1002;
  display: flex;
  justify-content: flex-end;
`
export const PreviewContent = styled.div`
  width: 90%;
  background-color: ${theme('preview.bg')};
  height: 100%;
  overflow-y: scroll;
  box-shadow: ${theme('preview.shadow')};
  padding: 20px;
`
export const PreviewHeader = styled.div`
  border-bottom: 1px solid tomato;
  text-align: center;
  line-height: 30px;
`
export const PreviewBody = styled.div`
  margin-top: 20%;
  padding: 10px;
`

export const PreviewCloser = styled.div`
  width: 10%;
`

export const StateTreeHeader = styled.div`
  border-bottom: 1px dashed ${theme('font')};
  margin-left: 5px;
  margin-bottom: 5%;
  padding-bottom: 10px;
`

const closeWith = '40px'

export const CloserInner = styled.div`
  width: ${closeWith};
  height: 45px;
  background-color: ${theme('preview.bg')};
  transform-origin: right center 0;
  transform: rotate3d(0, 1, 0, -30deg);
  box-shadow: -7px 4px 19px 0px rgba(50, 50, 50, 0.2);
`
// box-shadow: -5px 0px 14px 0px rgba(189, 189, 189, 0.37);

export const Closer = styled.div`
  float: right;
  width: ${closeWith};
  height: ${closeWith};
  perspective: ${closeWith};
  cursor: pointer;
  display: ${props => (props.type === 'account' ? 'none' : 'block')};

  &:after {
    content: '✕';
    position: absolute;
    top: 9px;
    right: 6px;
    font-size: large;
    color: ${theme('preview.font')};
    font-weight: lighter;
  }
`

export const TheTitle = styled.span`
  font-size: 1.5rem;
  padding: 0.2em;
  color: black;
  position: relative;
  display: inline-block;
`
