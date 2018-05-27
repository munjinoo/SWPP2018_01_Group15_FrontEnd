import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const PastEvents = ({ clubState = { past_events: [], needLoading: true }, onLoad, clubid }) => {
  if (clubState.needLoading) {
    const onLoading = () => {
      onLoad(clubid)
    }
    return (
      <Wrapper>
        <Load onLoad={onLoading} />
      </Wrapper>
    )
  }
  return (
    <Wrapper>
      지난 행사
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
