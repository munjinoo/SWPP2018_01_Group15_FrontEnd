import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardList = ({ clubState={id, boards: [], needLoading: true}, onLoad, clubid, onDeleteBoard}) => {
  const loadingFunc = () => {
    onLoad(clubid)
  }
  
  if (clubState.needLoading)
    return(
      <Wrapper>
        <Load onLoad={loadingFunc} />
      </Wrapper>
    )
    

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

BoardList.propTypes = {
  reverse: PropTypes.bool,
}

export default BoardList
