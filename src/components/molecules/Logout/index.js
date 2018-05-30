import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Logout = ({ username, onLogout }) => {
  return (
    <Wrapper>
      Hello, <Link to="/mypage">{username}</Link><br/>
      <button onClick={onLogout}>Logout</button>
    </Wrapper>
  )
}

Logout.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Logout
