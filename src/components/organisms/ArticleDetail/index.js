import React from 'react'
import { Card, CardTitle, CardSubTitle, CardText, Button, ButtonGroup } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ArticleShow, ArticleEdit } from 'components'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false
    }
    this.onEdit = this.onEdit.bind(this)
    this.onEditEnd = this.onEditEnd.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  onEdit() {
    this.setState({ isEdit: true })
  }

  onEditEnd() {
    this.setState({ isEdit: false })
  }

  onDelete() {
    this.props.onDelete(this.props.articleid)
  }

  componentDidMount() {
    this.props.onLoad(this.props.articleid)
  }

  render() {
    const articleState = this.props.articleState
    const articleid = this.props.articleid

    if(this.state.isEdit)
      return (
        <ArticleEdit
          articleid={articleid}
          title={articleState.title} 
          content={articleState.content}
          onPut={this.props.onPut}
          onEditEnd={this.onEditEnd}
        />
      )
  
    else
      return (
        <ArticleShow {...this.props}>
          <ButtonGroup>
            <Button onClick={this.onEdit}>수정</Button>
            <Button onClick={this.onDelete} color="danger">삭제</Button>
          </ButtonGroup>
        </ArticleShow>
      )
  }
}


export default ArticleDetail
