import React from 'react'
import { AccountForm } from 'components'
import { AccountList } from 'components'

const ClubAccountingPage = () => {
  return(
    <div>
      <p> 동아리 회계 관리 </p>
      <AccountForm /> 
      <AccountList /> 
    </div>
  )
}

export default ClubAccountingPage
