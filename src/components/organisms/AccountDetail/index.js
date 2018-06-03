import React from 'react'
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


const AccountDetail = ({ accountState = { created_at: null, updated_at: null, is_income: null, money: null, date: null, writer: null, content: null }, accountid }) => {
  return (
    <Wrapper>
      
      <strong>{accountState.is_income ===  "income" ? `수입` : `지출` } </strong> <br/> 
            금액: {accountState.money} <br/>
            작성자: {accountState.writer} <br/>
            내용: {accountState.content} <br/>
            날짜: {accountState.date} <br/>
            작성일: {accountState.created_at} <br/>
            수정일: {accountState.updated_at} <br/>
      
    </Wrapper>
    // edit, delete to be added
  )
}

export default lifecycle(methods)(AccountDetail)
