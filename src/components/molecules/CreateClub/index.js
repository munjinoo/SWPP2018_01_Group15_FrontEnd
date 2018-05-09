import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

// FIXME: Link route incomplete.. ;^;
const CreateClub = ({ clubState = {admin: [], members: []}, onPostClub, router }) => {
  let name = '';
  let scope = '';
  let category = '';
  let introduction = '';

  const onClick = () => {
    const callback = (path) => {
      router.push(path);
    }
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
      동아리 소속: <input type="text" ref={node => {scope = node;}} /> <br/>
      분류: 
        <select ref={node => {category = node;}}>
          <option value = "">--분류 선택--</option>
            <option value="학술">학술</option>
            <option value="취미">취미</option>
            <option value="운동">운동</option>
            <option value="종교">종교</option>
            <option value="문예">문예</option>
            <option value="봉사">봉사</option>
            <option value="교류">교류</option>
            <option value="예술">예술</option>
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