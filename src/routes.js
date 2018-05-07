import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, SignupPage } from 'components'

const routes = (
 
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path = "signup" component={SignupPage} />
  </Route>

)

export default routes
