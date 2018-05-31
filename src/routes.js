import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage, MyPage, ClubMain, CreateClubPage, SignupPage, VerifyPage, ClubEventPage, ClubAccountingPage, ClubManagePage, BoardPage, ArticlePage } from 'components'


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
    <Route path = 'mypage' component={MyPage} />
    <Route path = 'club/create' component={CreateClubPage} />
    <Route path = 'club/:clubid' component={ClubMain} />
    <Route path = 'club/:clubid/event' component = {ClubEventPage}/>
    <Route path = 'club/:clubid/manage' component = {ClubManagePage} /> 
    <Route path = 'club/:clubid/account' component = {ClubAccountingPage} />
    <Route path = "signup" component={SignupPage} />
    <Route path = 'board/:boardid' component={BoardPage} />
    <Route path = 'article/:articleid' component={ArticlePage} />
  </Route>

)

export default routes
