import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { CheckAttendance } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`


const PastAttendance = ({ eventState = { past_attendees: [], club: null }, clubState = { admin: [] }, userState = { clubs_as_admin: [] }, eventid, clubid }) => {
  var isAdmin = false
  for (var i=0; i<userState.clubs_as_admin.length; i++) {
    if (userState.clubs_as_admin[i].id == clubid) {
      isAdmin = true
      break
    }
  }
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
      {isAdmin 
        && <CheckAttendance eventid = {eventid} clubid = {clubid}/>
      }
      
    </Wrapper>
  )
}

export default PastAttendance
