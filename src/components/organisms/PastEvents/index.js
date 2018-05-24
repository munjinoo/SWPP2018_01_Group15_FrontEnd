import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const PastEvents = ({ clubState = { past_events: [] }}) => {
  return (
    <Wrapper>
      <ul>
        {clubState.past_events.map(event =>   //how to get only past events?
          <li key={event.id}>
            <strong>{event.name}</strong><br/>
            날짜: {event.date}<br/>
            내용: {event.content}<br/>
            <Link to={`/club/${clubState.id}/event/${event.id}`}>
              자세히 보기
            </Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

PastEvents.propTypes = {
  clubState: PropTypes.shape({
    past_events: PropTypes.arrayOf(PropTypes.object)   //??
  }),
  reverse: PropTypes.bool,
}

export default PastEvents
