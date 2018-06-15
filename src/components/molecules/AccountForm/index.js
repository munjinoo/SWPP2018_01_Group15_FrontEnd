import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountForm = ({ accountState = { created_at: null, updated_at: null, is_income: null,  money: null, date: null, writer: null, content: null }, onPostAccount, clubid} ) => {
  
  let is_income = '';
  let money = '';
  let date = '';
  let content = '';

  const onClick = () => {
    if(is_income != undefined && money != undefined && date != undefined && content != undefined){
      onPostAccount(is_income, money.value, date.value, content.value, clubid);
      is_income =  '' ;
      money.value = '';
      date.value = '';
      content.value = '';
    }
  }

  const onButtonClick = (e) => {
    is_income = e.target.value;
  }

  return (
    <Wrapper>
      <input type = "radio"  value = "expenditure" name = "is_income" onClick = { onButtonClick } ref = {node => {is_income =  node;}}/> 지출 <br/> 
      <input type = "radio" value = "income" name = "is_income"  onClick = { onButtonClick }  ref = {node => {is_income = node;}}/> 수입 <br/> 
      금액 : <input type = "text" ref = {node => {money = node;}} /> <br/> 
      날짜 : <input type="datetime-local" ref={node => {date = node;}} /> <br/>
      내용 : <input type = "text" ref = {node => {content = node;}} /> <br/> 
      <button onClick={ onClick }> 등록하기 </button> 

    </Wrapper>
  )


}


export default AccountForm
