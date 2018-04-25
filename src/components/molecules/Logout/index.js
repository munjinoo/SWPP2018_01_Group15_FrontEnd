import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Logout = ({ userState, onLogout }) => {
  return (
    <Wrapper>
      Hello, {userState.username}<br/>
      <button onClick={onLogout}>Logout</button>
    </Wrapper>
  )
}

Logout.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Logout
