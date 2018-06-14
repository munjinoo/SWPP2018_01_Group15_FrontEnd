import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { FutureAttendance, PastAttendance } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Attendance = ({ eventState = {date: null}, eventid, clubid}) => {
  var now = new Date()
  var eventDate = new Date(eventState.date)
  var isFuture = now < eventDate
  return (
    <Wrapper>
      {isFuture
        ? <FutureAttendance eventid = {eventid}/>
        : <PastAttendance eventid = {eventid} clubid = {clubid} />
      }
    </Wrapper>
  )
}

export default Attendance
