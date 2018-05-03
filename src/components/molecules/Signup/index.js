import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
`

const Signup = ({ onSignup }) => {

    let username = '';
    let password = '';
    let email = '';
    let name = '';
    let college = '';
    let major = '';
    let admission_year = '';

    const onClick = () => {
        if (username != undefined && password != undefined && email != undefined && name != undefined && college != undefined && major != undefined && admission_year != undefined) {
            onSignup(username.value, password.value, email.value, name.value, college.value, major.value, admission_year.value);
            username.value = '';
            password.value = '';
            email.value = '';
            name.value = '';
            college.value = '';
            major.value = '';
            admission_year.value = '';
        }
    }
    return (
        <Wrapper>
            아이디: <input type="text" ref={node => {username = node;}} /><br/>
            비밀번호: <input type="password" ref={node => {password = node;}} /><br/>
            이메일: <input type="email" ref={node => {email = node;}} /><br/>
            이름: <input type="test" ref={node => {name = node;}} /><br/>
            단과대학: 
               <select ref={node => {college = node;}}>
                  <option value = "">--선택--</option>
<option value="인문대학">인문대학</option>
<option value="사회과학대학">사회과학대학</option>
<option value="자연과학대학">자연과학대학</option>
<option value="간호대학">간호대학</option>
<option value="경영대학">경영대학</option>
<option value="공과대학">공과대학</option>
<option value="농업생명과학대학">농업생명과학대학</option>
<option value="미술대학">미술대학</option>
<option value="사범대학">사범대학</option>
<option value="생활과학대학">생활과학대학</option>
<option value="수의과대학">수의과대학</option>
<option value="약학대학">약학대학</option>
<option value="음악대학">음악대학</option>
<option value="의과대학">의과대학</option>
<option value="자유전공학부">자유전공학부</option>
<option value="보건대학원">보건대학원</option>
<option value="행정대학원">행정대학원</option>
<option value="환경대학원">환경대학원</option>
<option value="국제대학원">국제대학원</option>
<option value="치의학대학원">치의학대학원</option>
<option value="경영전문대학원">경영전문대학원</option>
<option value="의학대학원">의학대학원</option>
<option value="법학전문대학원">법학전문대학원</option>
<option value="융합과학기술대학원">융합과학기술대학원</option>
<option value="국제농업기술대학원">국제농업기술대학원</option>
<option value="공학전문대학원">공학전문대학원</option>
               </select>
            전공: <input type="text" ref={node => {major = node;}} /><br/>
            입학년도: <input type="" ref={node => {admission_year = node;}} /><br/>
            <button onClick={onClick}>회원가입</button>
        </Wrapper>
    )
}

Signup.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
}

export default Signup
