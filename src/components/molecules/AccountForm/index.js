import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'



const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountForm = ({ children, ...props }) => {
  
  let is_income = '';
  let money = '';
  let date = '';
  let content = '';

  const onClick = () => {
    if(is_income != undefined && money != undefined && date != undefined && content != undefined){
      onPostAccount(is_income.value, money.value, date.value, content.value);
      let is_income = '';
      let money = '';
      let date = '';
      let content = '';
    }
  }

  return (
    <Wrapper>
      수입 : <input type = "text" ref = {node => {is_income = node;}} /> <br/> 
      지출 : <input type = "text" ref = {node => {money = node;}} /> <br/> 
      날짜 : <input type="datetime-local" ref={node => {date = node}} /> <br/>
      내용 : <input type = "text" ref = {node => {content = node;}} /> <br/> 
      <button onClick={onClick}> 등록하기 </button> 

    </Wrapper>
  )
}

AccountForm.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default AccountForm
