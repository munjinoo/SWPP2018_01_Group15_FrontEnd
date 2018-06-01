import { AccountDetail } from 'containers'
import React from 'react'
import { Link } from 'react-router'

const AccountDetailPage = ({ routeParams }) => {
  return (
    <div>
      <AccountDetail accountid = {routeParams.accountid} />
    </div>
  )
}

export default AccountDetailPage
