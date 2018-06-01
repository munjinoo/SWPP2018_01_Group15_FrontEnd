import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'
import lifecycle from 'react-pure-lifecycle'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`
const componentDidMount = (props) => {
  props.onLoad(props.clubid)
}

const methods = {
  componentDidMount
}

const FutureEvents = ({ clubState = { future_events: [] }, clubid }) => {
  return (
    <Wrapper>
      다가오는 행사
      <ul>
        {clubState.future_events.map(event =>
          <li key={event.id}>
            <strong>{event.name}</strong><br/>
            날짜: {event.date}<br/>
            내용: {event.content}<br/>
            <Link to={`/event/${event.id}/`}>
              자세히 보기</Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}


export default lifecycle(methods)(FutureEvents)
