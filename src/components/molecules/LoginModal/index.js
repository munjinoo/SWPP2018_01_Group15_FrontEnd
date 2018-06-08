import React from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, Input, Button, InputGroup, Badge, Fade, Alert, Row, Col, Container } from 'reactstrap'

const LoginModal = ({ onLogin, isOpen=false, toggle, hasError=false }) => {
  let username = ''
  let password = ''
  const onClick = () => {
    if (username !== undefined && password !== undefined)
      onLogin(username.value, password.value)
  }

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>
        Login
      </ModalHeader>
      <ModalBody>
        <Input type="text" innerRef={node => username = node} placeholder="username" />
        <Input type="password" innerRef={node => password = node} placeholder="password" />
      </ModalBody>
      <ModalFooter>
        <Fade in={hasError}><Button outline disabled color="danger">로그인 실패</Button></Fade>
        <Button color="primary" onClick={onClick}>Login</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default LoginModal
