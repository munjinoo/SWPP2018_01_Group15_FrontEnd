import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class AttendanceStatistic extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      name: ''
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const clubid = this.props.clubid
    const attendance = this.props.attendance
    const members = this.props.members
    const onCheck = this.props.onCheck

    const onClick = (e) => {
      onCheck(clubid, e.target.id)
      this.setState({ name: e.target.name })
      this.toggle()
    }

    return (
      <Wrapper>
        <ListGroup>
        {members.map(user =>
          <ListGroupItem tag="button" key={user.id} onClick={onClick} id={user.id} name={user.name} action>{user.name}</ListGroupItem>
        )}
        </ListGroup>
        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{this.state.name}</ModalHeader>
          <ModalBody>
            출석률: {attendance.rate * 100} %<br/>
            결석: {attendance.absent} 회
          </ModalBody>
        </Modal>
      </Wrapper>
    )
  }
}

export default AttendanceStatistic
