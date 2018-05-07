import React from 'react'
import { Link } from 'react-router'
import { UserStatus } from 'containers'

const HomePage = () => {
  return (
    <div>
      <UserStatus />
      <Link to="/signup">회원가입</Link>
    </div>
  )
}

export default HomePage
