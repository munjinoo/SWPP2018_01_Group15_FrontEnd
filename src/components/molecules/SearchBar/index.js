import React from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Input, Button, Label, Card, Collapse, Form, FormGroup, Col, InputGroup, InputGroupAddon, InputGroupButton } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link, withRouter } from 'react-router'
import { scope_list } from './scope'
import { category_list } from './category'
import classnames from 'classnames'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      activeTab: '1'
    }
    this.toggle = this.toggle.bind(this)
    this.toggleTab = this.toggleTab.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  toggleTab(tab) {
    if (this.state.activeTab !== tab)
      this.setState({ activeTab: tab })
  }

  render() {
    const full = this.props.full
    const search = this.props.search
    let q = ''
    let category = ''
    let scope = ''
    let query = {}
    const onClick = () => {
      if (name != undefined) {
        query.q = q.value
        query.category = category.value
        query.scope = scope.value
      }
    }
    return (
      <Col sm={ full ? { size: 12 } : { size: 6, offset: 3 } }>
        <InputGroup>
          <Input type="text" defaultValue={search} innerRef={node => {q = node}} />
          <InputGroupButton addonType="append" isOpen={this.state.isOpen} toggle={this.toggle}>
            <Button tag={Link} to={{ pathname: "/search/", query: query }} onClick={onClick}>검색</Button>
            <Button onClick={this.toggle}>상세</Button>
          </InputGroupButton>
        </InputGroup>
        <Collapse isOpen={this.state.isOpen}>
          <br/>
          <Card body>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggleTab('1') }}
                >
                  분류
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggleTab('2') }}
                >
                  소속
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <br/>
                <Input type="select" innerRef={node => {category = node}}>
                  <option value="">선택</option>
                  {category_list.map(category =>
                    <option value={category} key={category}>{category}</option>
                  )}
                </Input>
              </TabPane>
              <TabPane tabId="2">
                <br/>
                <Input type="select" innerRef={node => {scope = node}}>
                  <option value="">선택</option>
                  {scope_list.map(scope =>
                    <option value={scope} key={scope}>{scope}</option>
                  )}
                </Input>
              </TabPane>
            </TabContent>
          </Card>
        </Collapse>
      </Col>
    )
  }
}

export default SearchBar
