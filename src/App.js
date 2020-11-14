import React, { useEffect } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom' //this the library for 'routing'
import './App.css'

import { connect } from 'react-redux'

//importing components
import HomePage from './pages/homepage/homepage'
import ShopPage from './pages/shoppage/shoppage'
import Header from './components/header/header'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up'
import CheckoutPage from './pages/checkout/checkout'
//importing selectors
import { selectCurrentUser } from './redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'
//importing actions
import { checkUserSession } from './redux/user/user-actions'

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// }; // just creating a 'HatsPage' component locally in 'App' component

const App = ({ checkUserSession, currentUser }) => {
  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
