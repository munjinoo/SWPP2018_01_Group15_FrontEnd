import React from 'react'
import { AccountForm, AccountList } from 'containers'

const ClubAccountingPage = (props) => {
  return(
    <div>
      <p> 동아리 회계 관리 </p>
      <AccountForm 
        clubid = {props.routeParams.clubid}
      /> 
      <AccountList 
        clubid = {props.routeParams.clubid}
      /> 
    </div>
  )
}

export default ClubAccountingPage
