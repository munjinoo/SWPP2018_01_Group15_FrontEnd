import React from 'react'
import { Breadcrumb, BreadcrumbItem, TabContent, TabPane, Nav, NavItem, NavLink, Card, Row, Col } from 'reactstrap'
import { Link } from 'react-router'
import { MenuBar, BoardList, CreateBoard, ChangeUserStatus } from 'containers'
import classnames from 'classnames'

class ClubManagePage extends React.Component {
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

  render() {
    const clubid = this.props.params.clubid
    return (
      <div>
        <MenuBar />
        <Breadcrumb>
          <BreadcrumbItem><Link to={`/club/${clubid}`}>동아리</Link></BreadcrumbItem>
          <BreadcrumbItem active>관리</BreadcrumbItem>
        </Breadcrumb>
        <Card body>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => {this.toggle('1')}}
              >
                게시판 관리
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => {this.toggle('2')}}
              >
                회원 관리
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <br/>
              <CreateBoard />
              <br/>
              <BoardList clubid={clubid} />
            </TabPane>
            <TabPane tabId="2">
              <br/>
              <ChangeUserStatus clubid={clubid} />
            </TabPane>
          </TabContent>
        </Card>
      </div>
    )
  }
}

export default ClubManagePage
