import React from 'react'
import { Link } from 'react-router'
import { AccountDetail, MenuBar } from 'containers'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'

const AccountDetailPage = ({ params }) => {
  const accountid = params.accountid
  const clubid = params.clubid

  return (
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to={`/club/${clubid}/account`}>회계</Link></BreadcrumbItem>
        <BreadcrumbItem active>회계 상세</BreadcrumbItem>
      </Breadcrumb>
      <AccountDetail accountid={accountid} />
    </div>
  )
}

export default AccountDetailPage
