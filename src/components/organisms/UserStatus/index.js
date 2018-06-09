import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Card, CardBody, Container } from 'reactstrap'
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
      <Logout username={userState.username} onLogout={onLogout} />
    )
  } else {
    return (
      <Login onLogin={onLogin} />
    )
  }
}

export default lifecycle(methods)(UserStatus)