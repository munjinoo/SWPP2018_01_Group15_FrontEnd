import { EventInfo, Attendance } from 'containers'
import React from 'react'

const EventDetailPage = ({ params }) => {
  return (
    <div>
      <EventInfo eventid={params.eventid}/>
      <Attendance eventid={params.eventid} clubid={params.clubid} />
    </div>
  )
}

export default EventDetailPage
