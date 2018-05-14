import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateClub = ({ clubState = {admin: [], members: []}, onPostClub }) => {
  let name = '';
  let scope = '';
  let category = '';
  let introduction = '';

  const onClick = () => {
    if (name != undefined && scope != undefined && category != undefined && introduction != undefined) {
      onPostClub(name.value, scope.value, category.value, introduction.value);
      name.value = '';
      scope.value = '';
      category.value = '';
      introduction.value = '';
    }
  }
  return (    
    <Wrapper>
      동아리 이름: <input type="text" ref={node => {name = node;}} /> <br/>
      동아리 소속: 
        <select ref={node=> {scope = node;}}> 
          <option value = "">--소속 선택--</option>
          <option value = "중앙동아리">중앙동아리</option>
          <option value = "연합동아리">연합동아리</option>
          <option value = "단과대학동아리">단과대학동아리</option>
          <option value = "학과/부 동아리">학과/부 동아리</option>
          <option value = "기타">기타</option>
        </select> <br />

      분류: 
        <select ref={node => {category = node;}}>
          <option value = "">--분류 선택--</option>
            <option value="학술매체분과">학술매체분과</option>
            <option value="취미교양분과">취미교양분과</option>
            <option value="연행예술분과">연행예술분과</option>
            <option value="무예운동분과">무예운동분과</option>
            <option value="종교분과">종교분과</option>
            <option value="인권봉사분과">인권봉사봉사</option>
        </select> <br />
      동아리 소개: <input type="text" ref={node => {introduction = node;}} /> <br/>
      <button onClick={onClick}>동아리방 만들기</button>
    </Wrapper>
  )
}

CreateClub.propTypes = {
  onPostClub: PropTypes.func.isRequired,
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default CreateClub
