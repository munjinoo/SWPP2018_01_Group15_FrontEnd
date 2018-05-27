import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const FutureEvents = ({ clubState = { future_events: [], needLoading: true }, onLoad, clubid }) => {
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
      다가오는 행사
      <ul>
        {clubState.future_events.map(event =>
          <li key={event.id}>
            <strong>{event.name}</strong><br/>
            날짜: {event.date}<br/>
            내용: {event.content}<br/>
            <Link to={`/club/${clubState.id}/event/${event.id}`}>
              자세히 보기</Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}

FutureEvents.propTypes = {
  clubState: PropTypes.shape({
    future_events: PropTypes.arrayOf(PropTypes.object)   //??
  }),
  reverse: PropTypes.bool,
}

export default FutureEvents
