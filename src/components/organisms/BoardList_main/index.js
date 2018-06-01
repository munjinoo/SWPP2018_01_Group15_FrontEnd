import React from 'react'
import styled from 'styled-components'
import lifecycle from 'react-pure-lifecycle'
import { font, palette } from 'styled-theme'
import { Load } from 'components'
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

const BoardList_main = ({ clubState={id, boards: []}, clubid}) => {
    
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


export default lifecycle(methods)(BoardList_main)
