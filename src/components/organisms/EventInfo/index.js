import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const EventInfo = ({ eventState = { name: null, date: null, content: null, needLoading: true }, onLoad, eventid }) => {
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
  return (
    <Wrapper>
      행사명: {eventState.name} <br/>
      행사 날짜: {eventState.date} <br/>
      내용: {eventState.content} <br/>
      
    </Wrapper>
    // edit, delete to be added
  )
}

EventInfo.propTypes = {
  reverse: PropTypes.bool,
}

export default EventInfo
