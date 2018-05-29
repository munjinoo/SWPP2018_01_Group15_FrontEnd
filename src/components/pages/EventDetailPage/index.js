import { EventInfo, FutureAttendance } from 'containers'
import React from 'react'
import { Link } from 'react-router'

const EventDetailPage = ({ routeParams }) => {
  return (
    <div>
      <EventInfo eventid = {routeParams.eventid}/>
      <FutureAttendance eventid = {routeParams.eventid}/>
      
    </div>
  )
}

export default EventDetailPage
