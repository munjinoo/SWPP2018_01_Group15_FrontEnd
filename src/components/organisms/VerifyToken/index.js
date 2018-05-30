import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const VerifyToken = ({ token, onVerify }) => {
  onVerify(token)
  return (
    <Wrapper>
    </Wrapper>
  )
}

VerifyToken.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default VerifyToken
