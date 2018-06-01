import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Logout = ({ userState, onLogout }) => {
  return (
    <Wrapper>
      Hello, <Link to="/mypage">{userState.username}</Link><br/>
      <button onClick={onLogout}>Logout</button>
    </Wrapper>
  )
}


export default Logout
