import React from 'react'
import { SearchBar } from 'components'
import { UserStatus } from 'containers'

const HomePage = () => {
  return (
    <div>
      <SearchBar />
      <UserStatus />
    </div>
  )
}

export default HomePage
