import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
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

const FutureAttendance = ({ eventState = { future_attendees: [], future_absentees: [], date:null }, onPutFutureAttendee, onPutFutureAbsentee, eventid }) => {
  var now = new Date()
  var eventDate = new Date(eventState.date)
  var isFuture = now < eventDate
  const onClickYes = () => {
    if (eventid != undefined) {
      onPutFutureAttendee(eventid);
      window.location.reload()
    }
  }
  const onClickNo = () => {
    if (eventid != undefined) {
      onPutFutureAbsentee(eventid);
      window.location.reload()
    }
  }
  return (
    <Wrapper>
      { isFuture &&
        <div>
          <strong>참가 여부 투표하기</strong><br/>
          <button onClick={onClickYes}>참가</button>
          <button onClick={onClickNo}>불참</button><br/> 
        </div>
      }
      <strong>참가하는 사람들</strong>({eventState.future_attendees.length}명) <br/>
      <ul>
        {eventState.future_attendees.map(attendee =>
          <li key={attendee.id}>
            {attendee.username}
          </li>
        )}
      </ul>
      <strong>불참하는 사람들</strong>({eventState.future_absentees.length}명) <br/>
      <ul>
        {eventState.future_absentees.map(absentee =>
          <li key={absentee.id}>
            {absentee.username}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default lifecycle(methods)(FutureAttendance)