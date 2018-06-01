import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'

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

const EventInfo = ({ eventState = { name: null, date: null, content: null }, eventid }) => {
  return (
    <Wrapper>
      행사명: {eventState.name} <br/>
      행사 날짜: {eventState.date} <br/>
      내용: {eventState.content} <br/>
      
    </Wrapper>
    // edit, delete to be added
  )
}


export default lifecycle(methods)(EventInfo)
