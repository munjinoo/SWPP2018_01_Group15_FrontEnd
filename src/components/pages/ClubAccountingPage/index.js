import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router'
import { MenuBar, AccountForm, AccountList } from 'containers'

const ClubAccountingPage = (props) => {
  const clubid = props.params.clubid
  return(
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem active>회계</BreadcrumbItem>
      </Breadcrumb>
      <AccountForm 
        clubid = {clubid}
      />
      <br/>
      <AccountList 
        clubid = {clubid}
      /> 
    </div>
  )
}

export default ClubAccountingPage
