import React from 'react'
import { Link } from 'react-router'
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


const BoardListMain = ({ clubState={id, boards: []}, clubid }) => {
  return (    
    <Wrapper>
      전체 게시판  <br />
      <ul>
        {clubState.boards.map((board) =>
          <li key={board.id}>
            <Link to={`/club/${clubid}/board/${board.id}`}>{board.name}</Link>
          </li>
        )}
      </ul>
    </Wrapper>

  )
}

export default lifecycle(methods)(BoardListMain)
