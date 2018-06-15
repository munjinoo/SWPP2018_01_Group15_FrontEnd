import { AccountDetail } from 'containers'
import React from 'react'

const AccountDetailPage = ({ routeParams }) => {
  const account_id = routeParams.accountid;

  return (
    <div>
      <AccountDetail accountid = {account_id} />
    </div>
  )
}

export default AccountDetailPage
