import React from 'react'
import { Label, Col, Input, Button, Form, FormGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateClub = ({ onPostClub }) => {
  let name = '';
  let scope = '';
  let category = '';
  let introduction = '';

  const onClick = () => {
    if (name != undefined && scope != undefined && category != undefined && introduction != undefined) {
      onPostClub(name.value, scope.value, category.value, introduction.value);
    }
  }
  return (    
    <Form>
      <FormGroup row>
        <Label sm={2} for="clubName">이름</Label>
        <Col sm={10}>
          <Input id="clubName" type="text" innerRef={node => {name = node;}} />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2}>소속</Label>
        <Col sm={10}>
          <Input type="select" innerRef={node=> {scope = node;}}> 
            <option value="">--소속 선택--</option>
            <option value="중앙동아리">중앙동아리</option>
            <option value="연합동아리">연합동아리</option>
            <option value="단과대학동아리">단과대학동아리</option>
            <option value="학과/부 동아리">학과/부 동아리</option>
            <option value="기타">기타</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="clubName">분류</Label>
        <Col sm={10}>
          <Input type="select" innerRef={node => {category = node;}}>
            <option value = "">--분류 선택--</option>
            <option value="학술매체분과">학술매체분과</option>
            <option value="취미교양분과">취미교양분과</option>
            <option value="연행예술분과">연행예술분과</option>
            <option value="무예운동분과">무예운동분과</option>
            <option value="종교분과">종교분과</option>
            <option value="인권봉사분과">인권봉사봉사</option>
          </Input>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Label sm={2} for="clubName">소개</Label>
        <Col sm={10}>
          <Input type="textarea" innerRef={node => {introduction = node;}} />
        </Col>
      </FormGroup>
      <FormGroup row check>
        <Button id="create-club-submit" onClick={onClick}>동아리방 만들기</Button>
      </FormGroup>
    </Form>
  )
}

export default CreateClub
