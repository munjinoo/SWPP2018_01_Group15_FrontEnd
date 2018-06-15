import React from 'react'
import { Jumbotron, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'
import { SearchBar } from 'components'
import { UserStatus, MenuBar } from 'containers'

const HomePage = () => {
  return (
    <div>
    <Modal backdrop={false} fade={false} external={''} size="lg" isOpen centered>
      <ModalHeader>
        <h1>동아리방</h1>
      </ModalHeader>
      <ModalBody>
        <SearchBar full/>
      </ModalBody>
      <ModalFooter>
        <UserStatus />
      </ModalFooter>
    </Modal>
    </div>
  )
}

export default HomePage
