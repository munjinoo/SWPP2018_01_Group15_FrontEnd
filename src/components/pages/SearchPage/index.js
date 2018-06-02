import React from 'react'
import { Search } from 'containers'

const SearchPage = ({ location }) => {
  const query = location.query
  return (
    <div>
      <Search query={query} />
    </div>
  )
}

export default SearchPage
