import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Load } from 'components'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountDetail = ({ accountState = { created_at: null, updated_at: null, is_income: null, money: null, date: null, writer: null, content: null, needLoading: true }, onLoad, accountid }) => {
  if (accountState.needLoading) {
    const onLoading = () => {
      onLoad(accountid)
    }
    return (
      <Wrapper>
        <Load onLoad={onLoading} />
      </Wrapper>
    )
  }
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

AccountDetail.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountDetail
