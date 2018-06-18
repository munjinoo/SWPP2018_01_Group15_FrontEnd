import React from 'react'
import { Button, Form, FormGroup, Input, Label, Card, CardBody, CardHeader, CardLink, CardText, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { Link } from 'react-router'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const getFlag = (list, id) => {
  for (var i=0; i<list.length; i++) {
    if (list[i].id == id)
      return true
  }
  return false
}

const componentDidMount = (props) => {
  props.onLoad(props.clubid)
}

const methods = {
  componentDidMount 
}

const AccountList = ({ clubState={id, accounts: [], money: 0},  clubid, onDeleteAccount, onDetail, uid }) => {
  const onClick = (e) => {
    onDeleteAccount(e.target.id)
  }

  const isAdmin = getFlag(clubState.admin, uid)
  let only = ''
  let start_from = ''
  let end_until = ''

  const onChange = () => {
    if (only !== undefined && start_from !== undefined && end_until !== undefined)
      onDetail(clubState.id, only.value, start_from.value, end_until.value)
  }

  return (
    <Card body> 
      <CardTitle>총 액: {clubState.money} 원</CardTitle>
        <hr/>
        <Form>
          <FormGroup>
            <Label>분류</Label>
            <Input type="select" innerRef={node => {only = node}}>
              <option value="all">전체</option>
              <option value="income">수입</option>
              <option value="outgo">지출</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>시작</Label>
            <Input type="date" innerRef={node => {start_from = node}} />
          </FormGroup>
          <FormGroup>
            <Label>종료</Label>
            <Input type="date" innerRef={node => {end_until = node}} />
          </FormGroup>
          <Button onClick={onChange}>조회</Button>
        </Form>
        <hr/>
        {clubState.accounts.map(account =>
          <div>
          <br/>
          <Card key={account.id}>
            <CardHeader>{account.is_income ===  true ? "수입" : "지출" }</CardHeader>
            <CardBody>
              <CardText>
              금액: {account.money} <br/>
              내용: {account.content} <br/>
              날짜: {account.date} <br/>
              </CardText>
              <CardLink tag={Link} to={`/club/${clubState.id}/account/${account.id}/`}>상세보기</CardLink>{' '}
              {isAdmin && <Button onClick={onClick} id={account.id}>삭제</Button>}
            </CardBody>
          </Card>
          </div>
        )}
    </Card>
  )
}

export default lifecycle(methods)(AccountList)
