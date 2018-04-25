import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Login, Logout } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const UserStatus = ({ userState={isLogin: false} }) => {
  if (userState.isLogin) {
      return (
        <Wrapper>
          <Logout />
        </Wrapper>
      )
  }
  return (
    <Wrapper>
      <Login />
    </Wrapper>
  )
}

UserStatus.propTypes = {
  reverse: PropTypes.bool,
}

export default UserStatus
