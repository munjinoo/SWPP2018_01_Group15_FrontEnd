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
  props.onLoad(props.eventid, props.clubid)
}

const methods = {
  componentDidMount
}

const PastAttendance = ({ eventState = { past_attendees: [], club: null }, clubState = { admin: [] }, userState = { id: null }, eventid, clubid }) => {
  console.log("eventState in pastAttendance",eventState)
  
  var isAdmin = false
  for (var i=0; i<clubState.admin.length; i++) {
    if (clubState.admin[i].id == userState.id) {
      isAdmin = true
    }
  }
  console.log("clubState", clubState)
  console.log("userState", userState)
  console.log("isAdmin", isAdmin)
  return (
    <Wrapper>
      
      <strong>참가한 사람들</strong>({eventState.past_attendees.length}명) <br/>
      <ul>
        {eventState.past_attendees.map(attendee =>
          <li key={attendee.id}>
            {attendee.username}
          </li>
        )}
      </ul>
      {isAdmin && 
        <CheckAttendance eventid = {eventid} clubid = {clubid}/>
      }
      
    </Wrapper>
  )
}

export default lifecycle(methods)(PastAttendance)