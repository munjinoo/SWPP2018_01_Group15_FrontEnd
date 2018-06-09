import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import lifecycle from 'react-pure-lifecycle'
import { ArticleEdit, ArticleShow } from 'containers'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const componentDidMount = (props) => {
  props.onLoad(props.articleid)
}

const methods = {
  componentDidMount
}

const ArticleDetail = ({ articleState={title: "", board: "", content: "", created_at: "", updated_at:"", writer:"", comments: [], isEdit}, articleid, onSetArticleIsEdit }) => {
  console.log(articleState.isEdit)
  const onClick = () => {
    onSetArticleIsEdit();
    console.log(articleState.isEdit)
  }

  if(articleState.isEdit){
    return (
      <Wrapper>
        <ArticleEdit articleid={articleid} title={articleState.title} content={articleState.content} /> <br/>
      </Wrapper>
    )
  }
  else {
  return (
    <Wrapper>
        <ArticleShow articleid={articleid} board={articleState.board} title={articleState.title} content={articleState.content} created_at={articleState.created_at} updated_at={articleState.updated_at} writer={articleState.writer} comments={articleState.comments} /> <br/>
        <button onClick={onClick}> 수정 </button>
    </Wrapper>
  )
  }
  
}


export default lifecycle(methods)(ArticleDetail)
