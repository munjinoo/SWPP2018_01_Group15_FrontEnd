import React from 'react'
import { MenuBar, Search } from 'containers'

const SearchPage = ({ location }) => {
  const query = location.query
  return (
    <div>
      <MenuBar />
      <Search query={query} />
    </div>
  )
}

export default SearchPage
