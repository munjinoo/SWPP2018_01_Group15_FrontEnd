import React from 'react'
import { Card, CardHeader, CardBody } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const componentDidMount = (props) => {
  props.onLoad(props.accountid)
}

const methods = {
  componentDidMount
}


const AccountDetail = ({ accountState = { created_at: '', updated_at: '', is_income: null, money: 0, date: '', writer: '', content: '' }, accountid }) => {
  return (
    <Card color={accountState.is_income ? "primary" : "danger"} outline>
      <CardHeader>{accountState.is_income === true ? "수입" : "지출" }</CardHeader>
      <CardBody>
        금액: {accountState.money} <br/>
        작성자: {accountState.writer.username} <br/>
        작성일: {accountState.created_at} <br/>
        {accountState.updated_at && <div>수정일: {accountState.updated_at}<br/></div>}
        내용: {accountState.content} <br/>
        날짜: {accountState.date} <br/>
      </CardBody>
    </Card>
  )
}

export default lifecycle(methods)(AccountDetail)
