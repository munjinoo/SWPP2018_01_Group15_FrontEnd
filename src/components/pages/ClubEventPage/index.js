import { CreateEvent, Events, MenuBar } from 'containers'
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router'

const ClubEventPage = ({ params }) => {
  return (
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${params.clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem active>행사 목록</BreadcrumbItem>
      </Breadcrumb>
      <Events clubid={params.clubid}/>
    </div>
  )
}

export default ClubEventPage
