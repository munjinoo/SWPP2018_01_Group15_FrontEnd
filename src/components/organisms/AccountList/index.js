import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

import { Link } from 'react-router'
import { Load } from 'components'


const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountList = ({ clubState = { accounts: []}}) => {
  const loadingFunc = () => {
    onLoad(clubid)
  }
  
  if(clubState.needLoading) 
    return (
      <Wrapper>
        <Load onLoad = {loadingFunc} />
      </Wrapper>
    )

  return (
    <Wrapper> 
      전체 회계 정보 <br /> 
      <ul> 
        {clubState.accounts.map(account => 
          <li>
            {account.content}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

AccountList.propTypes = {
  reverse: PropTypes.bool,
}

export default AccountList
