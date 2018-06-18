import React from 'react'
import { Input, Button, Form, FormGroup } from 'reactstrap'
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

const CheckAttendance = ({ clubState = { members: [] }, onPostPastAttendees, eventid, clubid }) => {
  let selected = []

  const onClickMember = (e) => {
    const id = e.target.id;
    const name = e.target.name;
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
    }
    else {
      selected.push(e.target)
    }
  }

  const onClickSubmit = () => {
    if (eventid != undefined && selected != undefined) {
      const members = selected.map(target => ({id: target.id, name: target.name}))
      onPostPastAttendees(eventid, members);
      for (var i=0; i<selected.length; i++) {
        selected[i].checked = false
      }
      selected = []
    }
  }

  return (
    <Form>
      <strong>출석 체크하기</strong><br/>
      <FormGroup check>
        {clubState.members.map(member =>
          <div key={member.id}>
          <Input type="checkbox" id={member.id} name={member.name} onChange={ onClickMember }/>
            {member.name} 
          </div>
        )}
      </FormGroup>
      <Button id="check-attendance" onClick={onClickSubmit}>출석체크 완료</Button>
    </Form>
  )
}


export default lifecycle(methods)(CheckAttendance)
