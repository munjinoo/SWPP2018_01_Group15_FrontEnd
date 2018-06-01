import React from 'react'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const Wrapper = styled.div`
    font-family: ${font('primary')};
    color: ${palette('grayscale', 0)};
`

const Login = ({ userState={isLogin: false}, onLogin }) => {
    let username = '';
    let password = '';
    const onClick = () => {
        if (username != undefined && password != undefined) {
            onLogin(username.value, password.value);
            username.value = '';
            password.value = '';
        }
    }
    return (
        <Wrapper>
            Username: <input type="text" ref={node => {username = node;}} /><br/>
            Password: <input type="password" ref={node => {password = node;}} /><br/>
            <button onClick={onClick}>Login</button>
        </Wrapper>
    )
}

export default Login
