import { CreateEvent, FutureEvents, PastEvents } from 'containers'
import React from 'react'

const ClubEventPage = () => {
  return (
    <div>
      <CreateEvent/>
      <FutureEvents/>
      <PastEvents/>
    </div>
  )
}

export default ClubEventPage
