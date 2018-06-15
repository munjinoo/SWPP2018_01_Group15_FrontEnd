import React from 'react'
import { Input, Button, Form, FormGroup, Label, Card, CardTitle } from 'reactstrap'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const AccountForm = ({ accountState = { created_at: null, updated_at: null, is_income: null,  money: null, date: null, writer: null, content: null }, onPostAccount, clubid} ) => {
  let is_income = ''
  let money = ''
  let date = ''
  let content = ''

  const onClick = () => {
    if(is_income != undefined && money != undefined && date != undefined && content != undefined){
      onPostAccount(is_income, money.value, date.value, content.value, clubid)
      is_income =  ''
      money.value = ''
      date.value = ''
      content.value = ''
    }
  }

  const onButtonClick = (e) => {
    is_income = e.target.value;
  }

  return (
    <Card body>
      <CardTitle>회계 기록 추가</CardTitle>
      <Form>
        <FormGroup check>
          <Label check>
            <Input type="radio" value={false} name="is_income" onClick={onButtonClick} innerRef={node => {is_income = node}}/>{' '}
            지출
          </Label>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="radio" value={true} name="is_income" onClick={onButtonClick} innerRef={node => {is_income = node}}/>{' '}
            수입
          </Label>
        </FormGroup>
        <FormGroup>
          <Label>금액</Label>
          <Input type="text" innerRef={node => {money = node}} />
        </FormGroup>
        <FormGroup>
          <Label>날짜</Label>
          <Input type="date" innerRef={node => {date = node}} />
        </FormGroup>
        <FormGroup>
          <Label>내용</Label>
          <Input type="text" innerRef={node => {content = node}} />
        </FormGroup>
        <Button onClick={onClick}>등록하기</Button>
      </Form>
    </Card>
  )


}


export default AccountForm
