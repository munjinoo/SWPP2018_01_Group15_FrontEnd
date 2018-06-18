import React from 'react'
import { Card, Input, Label, Form, FormGroup, Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { UserList } from 'components'
import { Link } from 'react-router'

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

const ChangeClubInfo = ({ clubState={name, scope, category, introduction}, clubid, onPutClub }) => {

  let new_name = '';
  let new_scope = '';
  let new_category = '';
  let new_introduction = '';

  const onClick = () => {
    onPutClub(clubid, new_name.value, new_scope.value, new_category.value, new_introduction.value)
  }
  return (
    <Card body>
      <Form>
        <FormGroup>
          <Label>이름</Label>
          <Input type="text" defaultValue={clubState.name} innerRef={node => {new_name=node;}} />
        </FormGroup>
        <FormGroup>
          <Label>소속</Label>
          <Input type="select" innerRef={node=> {new_scope = node;}}> 
            <option value="" selected={clubState.scope==""}>--소속 선택--</option>
            <option value="중앙동아리" selected={clubState.scope=="중앙동아리"}>중앙동아리</option>
            <option value="연합동아리" selected={clubState.scope=="연합동아리"}>연합동아리</option>
            <option value="단과대학동아리" selected={clubState.scope=="단과대학동아리"}>단과대학동아리</option>
            <option value="학과/부 동아리" selected={clubState.scope=="학과/부 동아리"}>학과/부 동아리</option>
            <option value="기타" selected={clubState.scope=="기타"}>기타</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>분류</Label>
          <Input type="select" innerRef={node => {new_category = node;}}>
            <option value = "" selected={clubState.category==""}>--분류 선택--</option>
            <option value="학술매체분과" selected={clubState.category=="학술매체분과"}>학술매체분과</option>
            <option value="취미교양분과" selected={clubState.category=="취미교양분과"}>취미교양분과</option>
            <option value="연행예술분과" selected={clubState.category=="연행예술분과"}>연행예술분과</option>
            <option value="무예운동분과" selected={clubState.category=="무예운동분과"}>무예운동분과</option>
            <option value="종교분과" selected={clubState.category=="종교분과"}>종교분과</option>
            <option value="인권봉사분과" selected={clubState.category=="인권봉사분과"}>인권봉사봉사</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label>소개</Label>
          <Input type="textarea" defaultValue={clubState.introduction} innerRef={node => {new_introduction = node;}} />
        </FormGroup>
        <ButtonGroup>
          <Button id="edit-ClubInfo" onClick={onClick} color="primary">수정</Button>
        </ButtonGroup>
      </Form>
    </Card>
  )

}

export default ChangeClubInfo
