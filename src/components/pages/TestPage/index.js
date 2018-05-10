import React from 'react'
import { Route, Redirect } from 'react-router'

const TestPage = (a) => {
    const params = a.params;
    console.log(a);
    if (params.token == "haha") {
        return <Redirect to='/' />

    }
    const HA = () => {

        console.log('in')
        a.router.replace('/')
        return (<Redirect to='/' />)
    }

  return (
    <div>Generic Page <a onClick={HA}>link</a> </div>
  )
}

export default TestPage
