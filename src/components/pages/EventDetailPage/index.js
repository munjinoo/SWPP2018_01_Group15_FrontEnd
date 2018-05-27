import React from 'react'
import { Link } from 'react-router'

const EventDetailPage = ({ routeParams }) => {
  const event_id = routeParams.eventid
  return (
    <div>
      행사명: 
      날짜:
      내용:
      
      참가자.... 기타 등등
    </div>
  )
}

export default EventDetailPage
