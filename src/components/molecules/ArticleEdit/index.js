import React from 'react'
import { Card, Input, Label, Form, FormGroup, Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const ArticleEdit = ({ articleid, title, content, onPut, onEditEnd }) => {
  let new_title='';
  let new_content='';
  const onClick = () => {
    onPut(articleid, new_title.value, new_content.value, onEditEnd, onEditEnd)
  }

  return (
    <Card body>
      <Form>
        <FormGroup>
          <Label>제목</Label>
          <Input type="text" defaultValue={title} innerRef={node => {new_title=node;}} />
        </FormGroup>
        <FormGroup>
          <Label>내용</Label>
          <Input type="textarea" defaultValue={content} innerRef={node => {new_content=node;}} />
        </FormGroup>
        <ButtonGroup>
          <Button id="edit-article" onClick={onClick} color="primary">수정</Button>
          <Button onClick={onEditEnd}>취소</Button>
        </ButtonGroup>
      </Form>
    </Card>
  )
}


export default ArticleEdit
