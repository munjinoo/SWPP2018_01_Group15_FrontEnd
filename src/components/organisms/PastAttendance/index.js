import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { CheckAttendance } from 'containers'

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

const PastAttendance = ({ eventState = { past_attendees: [] }, eventid }) => {
  console.log("eventState in component",eventState)
  
  //admin만 출첵할수 있게!?
  return (
    <Wrapper>
      <CheckAttendance eventid = {eventid}/>
      <strong>참가한 사람들</strong>({eventState.past_attendees.length}명) <br/>
      <ul>
        {eventState.past_attendees.map(attendee =>
          <li key={attendee.id}>
            {attendee.username}
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

export default lifecycle(methods)(PastAttendance)