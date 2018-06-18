import React from 'react'
import { ListGroup, ListGroupItem, Button, TabContent, TabPane, Nav, NavItem, NavLink, Card } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import classnames from 'classnames'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ClubList extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      activeTab: '1'
    }
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  componentDidMount() {
    this.props.onLoad()
  }

  render() {
    const as_member = this.props.userState.clubs_as_member
    const as_admin = this.props.userState.clubs_as_admin
    let only_as_member = []

    for (var i=0; i<as_member.length; i++) {
      var exists = false
      for (var j=0; j<as_admin.length; j++) {
        if (as_admin[j].id == as_member[i].id) {
          exists = true
        }
      }
      if (!exists) {
        only_as_member.push(as_member[i])
      }
    }

    return (
      <Card body>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1') }}
            >
              관리하는 동아리
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2') }}
            >
              가입한 동아리
            </NavLink>
          </NavItem>
        </Nav>
        <br/>
        <Button tag={Link} to={`/club/create`} color="info">동아리방 만들기</Button>
        <br/>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup id="clubs-as-admin" flush>
            {as_admin.map(club =>
              <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`} action>{club.name}</ListGroupItem>
            )}
            </ListGroup>
          </TabPane>
        </TabContent>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="2">
            <ListGroup id="clubs-as-member">
            {only_as_member.map(club =>
              <ListGroupItem key={club.id} tag={Link} to={`/club/${club.id}`}>{club.name}</ListGroupItem>
            )}
            </ListGroup>
          </TabPane>
        </TabContent>
      </Card>
    )
  }
}

export default ClubList
