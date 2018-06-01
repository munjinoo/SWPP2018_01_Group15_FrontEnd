import React from 'react'
import styled from 'styled-components'
import lifecycle from 'react-pure-lifecycle'
import { font, palette } from 'styled-theme'

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


const BoardList = ({ clubState={id, boards: [] }, clubid, onDeleteBoard}) => {
  const onClick = (e) => {
    onDeleteBoard(e.target.id)
    window.location.reload() // 새로고침
  }
  return (    
    <Wrapper>
      전체 게시판  <br />
      <ul>
        {clubState.boards.map((board) =>
          <li key={board.id}>
            {board.name} <button onClick={onClick} id={board.id}> 삭제 </button>
          </li>
        )}
      </ul>
    </Wrapper>

  )
}

export default lifecycle(methods)(BoardList)
