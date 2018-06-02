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
  props.onLoad(props.clubid, props.eventid)
}

const methods = {
  componentDidMount
}

const CheckAttendance = ({ clubState = { members: [] }, onPostPastAttendees, eventid, clubid }) => {
  console.log("clubState in component", clubState)
  console.log("clubid in component", clubid)
  let selected = [];

  const onClickMember = (e) => {
    const id = e.target.id;
    const username = e.target.name;
    const member = {id: id, username: username}
    var exists = false
    for (var i=0; i<selected.length; i++) {
      if (selected[i].id == id) {
        exists = true
      }
    }
    if (exists) {
      selected.splice(
        selected.findIndex(function(obj) {
          return obj.id === id
      }))
      console.log("deleted selected", selected)
    }
    else {
      selected.push(member)
      console.log("added selected", selected)
    }
  }

  const onClickSubmit = () => {
    if (eventid != undefined && selected != undefined) {
      onPostPastAttendees(eventid, selected);
      selected = []
    }
    window.location.reload()
  }

  return (
    <Wrapper>
      <strong>출석 체크하기</strong><br/>
        <ul>
        {clubState.members.map(member => 
          <li key={member.id}>
          <input type="checkbox" id={member.id} name={member.username} onChange={ onClickMember }/>
            {member.username}
          </li>
        )}
        </ul>
    <button onClick={onClickSubmit}>출석체크 완료</button>
    
    </Wrapper>
  )
}


export default lifecycle(methods)(CheckAttendance)
