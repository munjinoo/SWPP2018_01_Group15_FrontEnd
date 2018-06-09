import { CreateEvent, FutureEvents, PastEvents } from 'containers'
import React from 'react'

const ClubEventPage = ({ routeParams }) => {
  return (
    <div>
      <CreateEvent clubid={routeParams.clubid}/>
      <FutureEvents clubid={routeParams.clubid}/>
      <PastEvents clubid={routeParams.clubid}/>
    </div>
  )
}

export default ClubEventPage
