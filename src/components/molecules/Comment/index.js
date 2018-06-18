import React from 'react'
import { Card, CardTitle, CardText, Form, FormGroup, Label, Input, Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
    this.setEdit = this.setEdit.bind(this)
    this.unsetEdit = this.unsetEdit.bind(this)
  }
  
  setEdit() {
    this.setState({ isEdit: true })
  }
  
  unsetEdit() {
    this.setState({ isEdit: false })
  }

  render() {
    const comment = this.props.comment
    const isWriter = this.props.uid === comment.writer.id
    let title = ''
    let content = ''

    const onPut = () => {
      if (title !== undefined && content !== undefined)
        this.props.onPut(comment.id, title.value, content.value, this.unsetEdit, this.unsetEdit)

      title.value = ''
      content.value = ''
    }

    const onDelete = () => {
      this.props.onDelete(comment.id)
    }
    
    if (this.state.isEdit)
      return (
        <Card body>
          <Form>
            <FormGroup>
              <Label>제목</Label>
              <Input type="text" defaultValue={comment.title} innerRef={node => {title = node}} />
            </FormGroup>
            <FormGroup>
              <Label>내용</Label>
              <Input type="textarea" defaultValue={comment.content} innerRef={node => {content = node}} />
            </FormGroup>
            <ButtonGroup>
              <Button onClick={onPut} color="primary">수정</Button>
              <Button onClick={this.unsetEdit}>취소</Button>
            </ButtonGroup>
          </Form>
        </Card>
      )

    else
      return (
        <Card body>
          <CardTitle>{comment.title}</CardTitle>
          <CardText>{comment.content}</CardText>
          {isWriter ?
            <ButtonGroup>
              <Button onClick={this.setEdit}>수정</Button>
              <Button onClick={onDelete} color="danger">삭제</Button>
            </ButtonGroup>
          : ''}
        </Card>
      )
  }
}

export default Comment
