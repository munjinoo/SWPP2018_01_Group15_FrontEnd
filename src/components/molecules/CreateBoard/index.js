import React from 'react'
import { Button, Input, Label, Form, FormGroup } from 'reactstrap'
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
    <Form inline>
      <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
        <Input type="text" placeholder="게시판 이름" innerRef={node => {name = node;}} />
      </FormGroup>
      <Button onClick={onClick}>게시판 생성</Button>
    </Form>
  )
}

export default CreateBoard
