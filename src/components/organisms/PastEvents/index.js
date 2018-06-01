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

const PastEvents = ({ clubState = { past_events: [] }, clubid }) => {
  
  return (
    <Wrapper>
      지난 행사
      <ul>
        {clubState.past_events.map(event =>   //how to get only past events?
          <li key={event.id}>
            <strong>{event.name}</strong><br/>
            날짜: {event.date}<br/>
            내용: {event.content}<br/>
            <Link to={`/event/${event.id}/`}>
              자세히 보기
            </Link>
          </li>
        )}
      </ul>
    </Wrapper>
  )
}


export default lifecycle(methods)(PastEvents)
