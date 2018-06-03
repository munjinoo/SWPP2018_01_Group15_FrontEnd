import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

import { Link } from 'react-router'
import { Load } from 'components'


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
    <Wrapper> 
      전체 회계 정보 <br /> 
      <ul>
        {clubState.accounts.map((account,i) => 
          <li key={i}>
            <strong>{account.is_income ===  "income" ? `수입` : `지출` } </strong> <br/> 
            금액: {account.money} <br/>
            내용: {account.content} <br/>
            날짜: {account.date} <br/>
            <Link to={`/account/${account.id}/`}> 상세보기 </Link> 
            <button onClick = {onClick} id = {account.id}> 삭제 </button>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default lifecycle(methods)(AccountList)
