import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateBoard = ({ clubState, onPostBoard }) => {
  let name = '';

  const onClick = () => {
    if (name != undefined) {
      onPostBoard(clubState.id, name.value);
      name.value= '';    
    }
  }

  return (
    <Wrapper>
      게시판 이름: <input type="text" ref={node => {name = node;}} /> <br/>
      <button onClick={onClick}>게시판 생성</button>
    </Wrapper>
  )
}

CreateBoard.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default CreateBoard
