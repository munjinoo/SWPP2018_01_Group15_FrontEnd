import React from 'react'
import { Button, ButtonGroup, ListGroup, ListGroupItem } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const FutureAttendance = ({ eventState = { future_attendees: [], future_absentees: [], date:null }, onPutFutureAttendee, onPutFutureAbsentee, eventid }) => {
  var now = new Date()
  var eventDate = new Date(eventState.date)
  var isFuture = now < eventDate
  const onClickYes = () => {
    if (eventid != undefined)
      onPutFutureAttendee(eventid)
  }
  const onClickNo = () => {
    if (eventid != undefined)
      onPutFutureAbsentee(eventid)
  }
  return (
    <Wrapper>
      { isFuture &&
        <div>
          <strong>참가 여부 투표하기</strong><br/>
          <ButtonGroup>
            <Button onClick={onClickYes} color="primary">참가</Button>
            <Button onClick={onClickNo} color="secondary">불참</Button>
          </ButtonGroup>
        </div>
      }
      <strong>참가자</strong>({eventState.future_attendees.length}명) <br/>
      <ListGroup>
        {eventState.future_attendees.map(attendee =>
          <ListGroupItem key={attendee.id}>
            {attendee.username}
          </ListGroupItem>
        )}
      </ListGroup>
      <strong>불참자</strong>({eventState.future_absentees.length}명) <br/>
      <ListGroup>
        {eventState.future_absentees.map(absentee =>
          <ListGroupItem key={absentee.id}>
            {absentee.username}
          </ListGroupItem>
        )}
      </ListGroup>
    </Wrapper>
  )
}

export default FutureAttendance
