import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Login, Logout } from 'containers'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const UserStatus = ({ userState={isLogin: false, needLoading: {user: true}}, onLoad }) => {
  if (userState.needLoading.user) {
    return (
      <Wrapper>
        <Load onLoad={onLoad} />
       </Wrapper>
    )
  } else if (userState.isLogin) {
    return (
      <Wrapper>
        <Logout />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Login />
      </Wrapper>
    )
  }
}

UserStatus.propTypes = {
  reverse: PropTypes.bool,
}

export default UserStatus
