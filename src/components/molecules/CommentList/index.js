import React from 'react'
import { Card, CardBody, CardHeader, Form, FormGroup, Label, Input, Button } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { Comment } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const CommentList = ({ uid, articleid, comment_list = [], onPost, onPut, onDelete }) => {
  let title = ''
  let content = ''

  const onClick = () => {
    if (title !== undefined && content !== undefined)
      onPost(articleid, title.value, content.value)

    title.value = ''
    content.value = ''
  }

  return (
    <Card>
      <CardHeader>댓글</CardHeader>
      <CardBody>
        <Form>
          <FormGroup>
            <Input type="text" placeholder="제목" innerRef={node => {title = node}} />
          </FormGroup>
          <FormGroup>
            <Input type="textarea" placeholder="내용" innerRef={node => {content = node}} />
          </FormGroup>
          <Button onClick={onClick}>작성</Button>
        </Form>
        {comment_list.map(comment =>
          <div>
            <br/>
            <Comment key={comment.id} uid={uid} comment={comment} onPut={onPut} onDelete={onDelete} />
          </div>
        )}
      </CardBody>
    </Card>
  )
}

export default CommentList
