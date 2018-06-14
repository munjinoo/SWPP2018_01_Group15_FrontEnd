import React from 'react'
import { Input, Button, Form, FormGroup, Label, Col } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateEvent = ({ onPostEvent, clubid }) => {

  let name = '';
  let content = '';
  let date = '';
  
  const onClick = () => {
    if (name != undefined && content != undefined && date != undefined) {
      onPostEvent(name.value, content.value, date.value, clubid);
    }
  }
  return (
    <Form>
      <FormGroup row>
        <Label sm="2">행사 이름</Label>
        <Col sm="10">
          <Input type="text" innerRef={node => {name = node;}} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm="2">날짜</Label>
        <Col sm="10">
          <Input type="datetime-local" innerRef={node => {date = node}} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm="2">설명</Label>
        <Col sm="10">
          <Input type="text" innerRef={node => {content = node;}} />
        </Col>
      </FormGroup>
      <FormGroup check row>
        <Col sm={{ size: 2, offset: 10 }}>
          <Button id="post-event" onClick={onClick}>등록하기</Button>
        </Col>
      </FormGroup>
    </Form>
  )
}


export default CreateEvent
