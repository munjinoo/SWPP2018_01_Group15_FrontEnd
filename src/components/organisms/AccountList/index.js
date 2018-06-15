import React from 'react'
import { Button, Card, CardBody, CardHeader, CardLink, CardText, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { Link } from 'react-router'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const componentDidMount = (props) => {
  props.onLoad(props.clubid)
}

const methods = {
  componentDidMount 
}

const AccountList = ({ clubState={id, accounts: []},  clubid, onDeleteAccount}) => {
  const onClick = (e) => {
    onDeleteAccount(e.target.id)
  }

  return (
    <Card body> 
      <CardTitle>전체 회계 정보</CardTitle> 
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
              <Button onClick={onClick} id={account.id}>삭제</Button>
            </CardBody>
          </Card>
          </div>
        )}
    </Card>
  )
}

export default lifecycle(methods)(AccountList)
