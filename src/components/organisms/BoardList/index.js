import React from 'react'
import { ListGroup, ListGroupItem, Button } from 'reactstrap'
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
  }
  return (    
    <Wrapper>
      <h3>전체 게시판</h3>
      <ListGroup>
        {clubState.boards.map((board) =>
          <ListGroupItem key={board.id}>
            {board.name} <Button onClick={onClick} id={board.id} size="sm" color="danger">삭제</Button>
          </ListGroupItem>
        )}
      </ListGroup>
    </Wrapper>

  )
}

export default lifecycle(methods)(BoardList)
