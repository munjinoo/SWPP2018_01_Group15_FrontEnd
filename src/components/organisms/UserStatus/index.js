import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'
import lifecycle from 'react-pure-lifecycle'
import { font, palette } from 'styled-theme'
import { Login, Logout } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad()
}

const methods = {
  componentDidMount
}

const UserStatus = ({ userState={isLogin: false}, onLoad, onLogout, onLogin }) => {
  if (userState.isLogin) {
    return (
      <Wrapper>
        <Logout username={userState.username} onLogout={onLogout} />
      </Wrapper>
    )
  } else {
    return (
      <Wrapper>
        <Login onLogin={onLogin} />
        <Link to='/signup'>회원가입</Link>
      </Wrapper>
    )
  }
}

UserStatus.propTypes = {
  reverse: PropTypes.bool,
}

export default lifecycle(methods)(UserStatus)
