import React from 'react'
import { VerifyToken } from 'containers'

const VerifyPage = ({ params }) => {
  console.log(params)
  return (
    <div><VerifyToken token={params.token} /></div>
  )
}

export default VerifyPage
