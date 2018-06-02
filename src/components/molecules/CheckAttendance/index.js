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

  const onClickSubmit = () => {
    // if (eventid != undefined && selected != undefined) {
      
      // onPostPastAttendees(eventid, selected);
      // selected = []
      // //window.location.reload()
    // }
  }
  const onClickMember = (e) => {
    id = e.target.id;
    name = e.target.name;
    member = {id: id, username: name}
    // if (selected.has(member)) {
    //   selected.delete(member);
    // }
    // else {
    //   selected.add(member)
    // }
  }
  return (
    <Wrapper>
      <strong>출석 체크하기</strong><br/>
        <ul>
        {clubState.members.map(member => 
          <li key={member.id}>
          <input type="checkbox" id={member.id} name={member.name} onChange={ onClickMember }/>
            {member.name}
          </li>
        )}
        </ul>
    <button onClick={onClickSubmit}>출석체크 완료</button>
    
    </Wrapper>
  )
}


export default lifecycle(methods)(CheckAttendance)
