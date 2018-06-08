import React from 'react'
import { Input, Button, Fade, Card, Row, Col, CardTitle, CardBody } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { major_list } from './major'
import { college_list } from './college'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class Signup extends React.Component {
  constructor(props) {
	super(props)
	this.state = {
	  major: [],
	  college: '',
	  hasError: false,
	  errMsg: ''
	}
	this.setMajor = this.setMajor.bind(this)
	this.onErr = this.onErr.bind(this)
  }

  onErr(msg) {
	const errMsg = (msg.length === 0) ? '회원가입 실패' : msg
	this.setState({
	  hasError: true,
	  errMsg: errMsg
	})
  }

  setMajor(event) {
	this.setState({
	  college: event.target.value,
	  major: major_list[event.target.value]
	})
  }

  render() {
	const max_year = new Date().getFullYear()
    let username = '';
    let password = '';
    let email = '';
    let name = '';
    let college = '';
    let major = '';
    let admission_year = '';

    const onClick = () => {
	  this.setState({
		hasError: false,
		errMsg: ''
	  })
      if (username != undefined && password != undefined && email != undefined && name != undefined && major != undefined && admission_year != undefined)
        this.props.onSignup(username.value, password.value, email.value+'@snu.ac.kr', name.value, this.state.college, major.value, admission_year.value, this.onErr)
	}

    return (
      <Card body>
	  <CardBody>
	  <CardTitle>회원가입</CardTitle>
        아이디: <Input type="text" innerRef={node => {username = node}} />
        비밀번호: <Input type="password" innerRef={node => {password = node}} />
        이메일: <Input type="email" innerRef={node => {email = node}} />
        이름: <Input type="test" innerRef={node => {name = node}} />
        단과대학: <Input type="select" onChange={this.setMajor}>
            <option value="">--선택--</option>
			{college_list.map(college =>
				<option value={college} key={college}>{college}</option>
			)}
        </Input>
		전공: <Input type="select" innerRef={node => {major = node;}}>
			<option value="">--선택--</option>
			{this.state.major.map(major =>
				<option value={major} key={major}>{major}</option>
			)}
		</Input>
입학년도: <Input type="number" innerRef={node => {admission_year = node}} max={max_year}/><br/>
<Row>
            <Col sm={{size:'auto', offset:0}}><Button onClick={onClick} color="primary">회원가입</Button></Col>
			<Col sm={{size:'auto', offset:0}}><Fade in={this.state.hasError}><Button outline disabled color="danger">{this.state.errMsg}</Button></Fade></Col>
			</Row>
			</CardBody>
        </Card>
    )
  }
}

export default Signup
