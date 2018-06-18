import React from 'react'
import { Button } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const DeleteClub = ({ clubid, onDelete }) => {
  const onClick = () => {
    onDelete(clubid)
  }

  return (
    <Wrapper>
      <Button onClick={onClick} color="danger">삭제</Button>
    </Wrapper>
  )
}

export default DeleteClub
