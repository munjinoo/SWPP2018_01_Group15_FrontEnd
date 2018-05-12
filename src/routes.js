import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, MyPage, ClubMain, CreateClubPage, SignupPage, VerifyPage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path='mypage' component={MyPage} />
    <Route path="signup" component={SignupPage} />

    <Route path='club'>
      <Route path='create' component={CreateClubPage} />
      <Route path=':clubid' component={ClubMain} />
    </Route>

    <Route path=':token' component={VerifyPage} />
  </Route>

)

export default routes
