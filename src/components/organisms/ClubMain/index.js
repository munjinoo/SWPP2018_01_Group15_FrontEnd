import React from 'react'
import { Link } from 'react-router'
import { Row, Col, Button, ButtonGroup, Collapse, Card, CardTitle, CardSubtitle, CardText, ListGroup, ListGroupItem } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ClubMain extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.getStatus = this.getStatus.bind(this)
    this.state = {
      collapse: false
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  getStatus() {
    const clubid = this.props.clubState.id
    const user = this.props.userState

    if (user.isLogin === false)
      return {isLogin: false, isWaiting: false, isMember: false, isAdmin: false}

    const waitings = user.clubs_as_waiting
    for (var i=0; i<waitings.length; i++) {
      if (waitings[i].id === clubid)
        return {isLogin: true, isWaiting: true, isMember: false, isAdmin: false}
    }

    const admins = user.clubs_as_admin
    for (var i=0; i<admins.length; i++) {
      if (admins[i].id === clubid)
        return {isLogin: true, isWaiting: false, isMember: true, isAdmin: true}
    }

    const members = user.clubs_as_member
    for (var i=0; i<members.length; i++) {
      if (members[i].id === clubid)
        return {isLogin: true, isWaiting: false, isMember: true, isAdmin: false}
    }

    return {isLogin: true, isWaiting: false, isMember: false, isAdmin: false}
  }

  componentDidMount() {
    this.props.onLoad(this.props.clubid)
  }

  render() {
    const clubState = this.props.clubState
    const clubid = this.props.clubid
    const status = this.getStatus()

    const onJoin = () => {
      this.props.onJoin(clubid)
    }

    const onCancel = () => {
      this.props.onCancel(clubid)
    }

    return (
      <Card body>
        <CardTitle>{clubState.name}</CardTitle>
        <CardSubtitle>{clubState.introduction}</CardSubtitle>
        <hr/>
        <Col sm={{ size: 10, offset: 1 }}>
          {status.isLogin && !status.isWaiting && !status.isMember &&
            <Button onClick={onJoin} color="success" outline block>동아리 가입</Button>
          }
          {status.isLogin && status.isWaiting &&
            <Button onClick={onCancel} color="danger" outline block>가입 취소</Button>
          }
          <Button onClick={this.toggle} color="info" block>게시판</Button>
          {status.isMember && <Button tag={Link} to={`/club/${clubid}/event`} color="success" block>동아리 행사</Button>}
          {status.isAdmin && <Button tag={Link} to={`/club/${clubid}/account`} color="warning" block>동아리 회계</Button>}
          {status.isAdmin && <Button tag={Link} to={`/club/${clubid}/manage`} color="primary" block>동아리 관리</Button>}
          <Collapse isOpen={this.state.collapse}>
            <br/>
            <ListGroup>
            {clubState.boards.map(board =>
              <ListGroupItem tag={Link} key={board.id} to={`/club/${clubid}/board/${board.id}`} action>{board.name}</ListGroupItem>
            )}
            </ListGroup>
          </Collapse>
        </Col>
      </Card>
    )
  }
}

export default ClubMain
