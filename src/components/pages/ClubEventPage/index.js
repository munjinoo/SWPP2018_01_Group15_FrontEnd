import { CreateEvent, FutureEvents, PastEvents } from 'containers'
import React from 'react'

const ClubEventPage = ({ params }) => {
  return (
    <div>
      <CreateEvent clubid={params.clubid}/>
      <FutureEvents clubid={params.clubid}/>
      <PastEvents clubid={params.clubid}/>
    </div>
  )
}

export default ClubEventPage
