import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateEvent = ({ eventState = { future_attendees: [], future_absentees: [], past_attendees: [] }, onPostEvent, clubid }) => {

  let name = '';
  let content = '';
  let date = '';
  
  const onClick = () => {
    if (name != undefined && content != undefined && date != undefined) {
      onPostEvent(name.value, content.value, date.value, clubid);
    }
  }
  return (
    <Wrapper>
      행사 이름: <input type="text" ref={node => {name = node;}} /> <br/>
      날짜: <input type="datetime-local" ref={node => {date = node}} /> <br/>
      설명: <input type="text" ref={node => {content = node;}} /> <br/>
      <button id="post-event" onClick={onClick}>등록하기</button>
    </Wrapper>
  )
}


export default CreateEvent
