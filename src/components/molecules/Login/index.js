import React from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Input, Label, Button, Row, Col, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { LoginModal } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      modal: false
    }
    this.toggle = this.toggle.bind(this)
    this.onLogin = this.onLogin.bind(this)
    this.onErr = this.onErr.bind(this)
  }

  onErr() {
    this.setState({ hasError: true })
  }

  onLogin(username, password) {
    this.props.onLogin(username, password, this.onErr)
    this.setState({ hasError: false })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      hasError: false
    })
  }

  render() {
    return [
        <div>
          <Button id="login-submit" onClick={this.toggle} color="primary">로그인</Button>{' '}
          <Button tag={Link} to="/signup/" color="secondary">회원가입</Button>
        </div>,
        <LoginModal onLogin={this.onLogin} isOpen={this.state.modal} toggle={this.toggle} hasError={this.state.hasError}/>
    ]
  }
}

export default Login
