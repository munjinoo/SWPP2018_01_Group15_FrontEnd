import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const FutureAttendance = ({ eventState = { future_attendees: [], future_absentees: [] }, onLoad, onPutFutureAttendee, eventid }) => {
  if (eventState.needLoading) {
    const onLoading = () => {
      onLoad(eventid)
    }
    return (
      <Wrapper>
        <Load onLoad={onLoading} />
      </Wrapper>
    )
  }
  console.log(eventState)
  
  const onClickYes = () => {
    if (eventid != undefined) {
      onPutFutureAttendee(eventid);
    }
  }
  const onClickNo = () => {}
  return (
    <Wrapper>
      <strong>참가 여부 투표하기</strong><br/>
      <button onClick={onClickYes}>참가</button>
      <button onClick={onClickNo}>불참</button><br/>
      <strong>참가하는 사람들</strong> <br/>
      <ul>
        {eventState.future_attendees.map(attendee =>
          <li key={attendee.id}>
            {attendee.username}
          </li>
        )}
      </ul>
      <strong>불참하는 사람들</strong> <br/>
      <ul>
        {eventState.future_absentees.map(absentee =>
          <li key={absentee.id}>
            {absentee.username}
          </li>
        )}
      </ul>
    </Wrapper>
    //check buttons need to be added
  )
}

FutureAttendance.propTypes = {
  reverse: PropTypes.bool,
}

export default FutureAttendance
