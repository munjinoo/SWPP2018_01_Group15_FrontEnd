import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Loading = styled.span`
  font-family: ${font('primary')};
  content: 'Loading...';
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.7);
  color: white;
  height: 100%
  width: 100%
  display: flex;
  justify-content: center;
  align-items: center;
`

const spinner = (delay) => styled.span`
  width: 18px;
  height: 18px;
  background-color: #333;

  border-radius: 100%;
  display: inline-block;
  -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
  animation: sk-bouncedelay 1.4s infinite ease-in-out both;
`

Loading.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

Loading.defaultProps = {
  palette: 'grayscale',
}

export default Loading
