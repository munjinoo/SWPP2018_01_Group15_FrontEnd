import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, MyPage, ClubMain, ClubCreatePage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path = 'mypage' component={MyPage} />
    <Route path = 'club/create' component={ClubCreatePage} />
    <Route path = 'club/:clubid' component={ClubMain} />
  </Route>
)

export default routes
