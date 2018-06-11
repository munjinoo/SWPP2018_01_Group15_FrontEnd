import React from 'react'
import { Button, Modal, ModalBody } from 'reactstrap'
import { Link } from 'react-router'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Logout = ({ username, onLogout }) => {
  return (
    <Modal isOpen backdrop={false} centered fade={false}>
      <ModalBody className="text-center">
        <Button tag={Link} to="/mypage">{username}</Button><br/>
        <Button id="logout" onClick={onLogout}>Logout</Button>
      </ModalBody>
    </Modal>
  )
}

export default Logout
