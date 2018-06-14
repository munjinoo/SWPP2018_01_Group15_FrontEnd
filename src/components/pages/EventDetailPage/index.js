import { EventInfo, Attendance, MenuBar } from 'containers'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router'
import React from 'react'

const EventDetailPage = ({ params }) => {
  return (
    <div>
      <MenuBar />
      <Breadcrumb>
        <BreadcrumbItem><Link to={`/club/${params.clubid}`}>동아리</Link></BreadcrumbItem>
        <BreadcrumbItem><Link to={`/club/${params.clubid}/event`}>행사 목록</Link></BreadcrumbItem>
        <BreadcrumbItem active>행사</BreadcrumbItem>
      </Breadcrumb>
      <EventInfo eventid={params.eventid} clubid={params.clubid}/>
    </div>
  )
}

export default EventDetailPage
