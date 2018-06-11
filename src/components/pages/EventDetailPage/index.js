import { EventInfo, Attendance } from 'containers'
import React from 'react'

const EventDetailPage = ({ routeParams }) => {
  return (
    <div>
      <EventInfo eventid = {routeParams.eventid}/>
      <Attendance eventid = {routeParams.eventid} clubid = {routeParams.clubid} />
    </div>
  )
}

export default EventDetailPage
