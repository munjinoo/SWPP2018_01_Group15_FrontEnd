import React from 'react'
import { Link } from 'react-router'
import { Form, FormGroup, Input, Label, Button, Row, Col, Modal, ModalBody } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
    font-family: ${font('primary')};
    color: ${palette('grayscale', 0)};
`

const Login = ({ onLogin }) => {
    let username = '';
    let password = '';
    const onClick = () => {
        if (username != undefined && password != undefined) {
            onLogin(username.value, password.value);
        }
    }
    return (
        <Modal isOpen centered backdrop={false} fade={false}>
          <ModalBody>
          <Form inline>
            <FormGroup>
              <Input type="text" placeholder="username" innerRef={node => {username = node;}} />
            </FormGroup>
            <FormGroup>
              <Input type="password" placeholder="password" innerRef={node => {password = node;}} />
            </FormGroup>
            <Row>
            <Col><Button id="login-submit" onClick={onClick} color="primary">로그인</Button></Col>
            <Col><Button tag={Link} to="/signup/" color="secondary">회원가입</Button></Col>
            </Row>
          </Form>
          </ModalBody>
        </Modal>
    )
}

export default Login
