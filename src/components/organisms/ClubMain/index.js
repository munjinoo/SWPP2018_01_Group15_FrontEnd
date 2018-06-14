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
    this.state = {
      collapse: false
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse })
  }

  componentDidMount() {
    this.props.onLoad(this.props.clubid)
  }

  render() {
    const clubState = this.props.clubState
    const clubid = this.props.clubid
    return (
      <Card body>
        <CardTitle>{clubState.name}</CardTitle>
        <CardSubtitle>{clubState.introduction}</CardSubtitle>
        <hr/>
        <Col sm={{ size: 10, offset: 1 }}>
          <Button onClick={this.toggle} color="info" block>게시판</Button>
          <Button tag={Link} to={`/club/${clubid}/event`} color="success" block>동아리 행사</Button>
          <Button tag={Link} to={`/club/${clubid}/account`} color="warning" block>동아리 회계</Button>
          <Button tag={Link} to={`/club/${clubid}/manage`} color="primary" block>동아리 관리</Button>
        </Col>
        <Collapse isOpen={this.state.collapse}>
          <br/>
          <ListGroup>
          {clubState.boards.map(board =>
            <ListGroupItem tag={Link} key={board.id} to={`/club/${clubid}/board/${board.id}`} action>{board.name}</ListGroupItem>
          )}
          </ListGroup>
        </Collapse>
      </Card>
    )
  }
}

export default ClubMain
