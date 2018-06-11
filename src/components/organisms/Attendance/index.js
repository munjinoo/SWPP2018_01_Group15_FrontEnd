import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { FutureAttendance, PastAttendance } from 'containers'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.eventid)
}

const methods = {
  componentDidMount
}

const Attendance = ({ eventState = {date: null}, eventid, clubid}) => {
  var now = new Date()
  var eventDate = new Date(eventState.date)
  var isFuture = now < eventDate
  return (
    <Wrapper>
      <FutureAttendance eventid = {eventid}/>
      {!isFuture && <PastAttendance eventid = {eventid} clubid = {clubid} />}
    </Wrapper>
  )
}

export default lifecycle(methods)(Attendance)
