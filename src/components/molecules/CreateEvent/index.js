import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateEvent = ({ eventState = { future_attendees: [], future_absentees: [], past_attendees: [] }, onPostEvent }) => {
  let name = '';
  let content = '';
  let date = '';     //???
  
  const onClick = () => {
    if (name != undefined && content != undefined && date != undefined) {
      onPostEvent(name.value, content.value, date.value);
      name.value = '';
      content.value = '';
      date.value = '';     //?????
    }
  }
  return (
    <Wrapper>
      행사 이름: <input type="text" ref={node => {name = node;}} /> <br/>
      날짜: <input type="datetime-local" ref={node => {date = node}} /> <br/>
      설명: <input type="text" ref={node => {content = node;}} /> <br/>
      <button onClick={onClick}>등록하기</button>
    </Wrapper>
  )
}

CreateEvent.propTypes = {
  eventState: PropTypes.shape({
    future_attendees:PropTypes.arrayOf(PropTypes.number),
    future_absentees:PropTypes.arrayOf(PropTypes.number),
    past_attendees:PropTypes.arrayOf(PropTypes.number),
    
  }),
  onPostEvent: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
  children: PropTypes.node, //??
}

export default CreateEvent
