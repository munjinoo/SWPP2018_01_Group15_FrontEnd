import React from 'react'
import { FormGroup, Form, Input, Label, Button } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CreateArticle = ({ boardState, onPostArticle }) => {
  let title = '';
  let content = '';

  const onClick = () => {
    if (title != undefined && content != undefined) {
      onPostArticle(boardState.id, title.value, content.value);
      title.value= '';    
      content.value='';
    }
  }

  return (
    <Form>
      <FormGroup>
        <Label>제목</Label>
        <Input type="text" innerRef={node => {title = node;}} />
      </FormGroup>
      <FormGroup>
        <Label>내용</Label>
        <Input type="textarea" innerRef={node => {content = node;}} />
      </FormGroup>
      <Button onClick={onClick}>게시</Button>
    </Form>
  )
}

export default CreateArticle
