import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Load } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const BoardList = ({ clubState={id, boards: [], needLoading: {board: true}}, onLoad}) => {
  if (clubState.needLoading.board)
    return{
      <Wrapper>
        <Load onLoad={onLoad} />
      </Wrapper>
    }
  return (    
    <Wrapper>
      전체 게시판  <br />
      <ul>
        {clubState.boards.map(board =>
          <li>
            {board.name}
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
