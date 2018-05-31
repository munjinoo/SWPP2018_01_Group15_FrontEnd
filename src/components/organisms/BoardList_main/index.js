import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'
import { Link } from 'react-router'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardList_main = ({ clubState={id, boards: [], needLoading: true}, clubid, onLoad}) => {
  const loadingFunc = () => {
    onLoad(clubid)
  }
  
  if (clubState.needLoading)
    return(
      <Wrapper>
        <Load onLoad={loadingFunc} />
      </Wrapper>
    )
    
  return (    
    <Wrapper>
      전체 게시판  <br />
      <ul>
        {clubState.boards.map((board) =>
          <li key={board.id}>
              <Link to={`/board/${board.id}`}>{board.name}</Link>
          </li>
        )}
      </ul>
    </Wrapper>

  )
}

BoardList_main.propTypes = {
  reverse: PropTypes.bool,
}

export default BoardList_main
