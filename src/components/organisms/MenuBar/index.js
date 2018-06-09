import React from 'react'
import { Link } from 'react-router'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap'
import lifecycle from 'react-pure-lifecycle'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { LoginModal } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class UserMenu extends React.Component {
  constructor(props) {
	super(props)
	this.state = {
	  modal: false,
	  hasError: false
	}
	this.toggle = this.toggle.bind(this)
	this.onLogin = this.onLogin.bind(this)
	this.onErr = this.onErr.bind(this)
  }

  onErr() {
	this.setState({
      hasError: true
	})
  }

  toggle() {
	this.setState({
	  modal: !this.state.modal,
	  hasError: false
	})
  }

  onLogin(username, password) {
	this.props.onLogin(username, password, this.onErr)
	this.setState({
	  hasError: false
	})
  }

  render() {
    if (this.props.isLogin)
      return (
        <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>{this.props.username}</DropdownToggle>
		  <DropdownMenu right>
		    <DropdownItem tag={Link} to="/mypage/">마이페이지</DropdownItem>
		    <DropdownItem onClick={this.props.onLogout}>로그아웃</DropdownItem>
		  </DropdownMenu>
	    </UncontrolledDropdown>
      )
    else
	  return [
        <UncontrolledDropdown nav inNavbar key={1}>
          <DropdownToggle nav caret>로그인이 필요합니다</DropdownToggle>
		  <DropdownMenu right>
		    <DropdownItem onClick={this.toggle}>로그인</DropdownItem>
			<DropdownItem tag={Link} to="/signup/">회원가입</DropdownItem>
		  </DropdownMenu>
	    </UncontrolledDropdown>,
		<LoginModal key={2} onLogin={this.onLogin} isOpen={this.state.modal} toggle={this.toggle} hasError={this.state.hasError}/>
	  ]
  }
}

const componentDidMount = (props) => {
  props.onLoad()
}

const methods = {
  componentDidMount
}

class MenuBar extends React.Component {
  constructor(props) {
	super(props)
	this.state = {
	  open: false
	}
	this.toggle = this.toggle.bind(this)
  }

  toggle() {
	this.setState({
	  open: !this.state.open
	})
  }
  
  componentDidMount() {
	this.props.onLoad()
  }

  render() {
    return (
      <Wrapper>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand tag={Link} to="/">DongariBang</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.open} navbar>
            <Nav className="ml-auto" navbar>
              <UserMenu {...this.props} />
            </Nav>
          </Collapse>
        </Navbar>
      </Wrapper>
    )
  }
}

export default MenuBar
