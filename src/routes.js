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
      <Route path=':clubid'>
        <IndexRoute component={ClubMain} />
        <Route path='event' component={ClubEventPage}/>
        <Route path='manage' component={ClubManagePage} /> 
        <Route path='account' component={ClubAccountingPage} />
        <Route path='board/:boardid'>
          <IndexRoute component={props => <BoardPage key={props.routeParams.boardid} {...props} />} />
          <Route path=':articleid' component={ArticlePage} />
        </Route>
      </Route>
    </Route>
    <Route path=':token' component={VerifyPage} />
    <Route path='mypage' component={MyPage} />
    <Route path = "signup" component={SignupPage} />
  </Route>

)

export default routes
