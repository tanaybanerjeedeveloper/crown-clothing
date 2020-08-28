import React from "react";
import { Switch, Route, Redirect } from "react-router-dom"; //this the library for 'routing'
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils"; // Auth will be helping in making the app aware of which user signedin/out
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user-actions";
//importing components
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shoppage/shoppage";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// }; // just creating a 'HatsPage' component locally in 'App' component

class App extends React.Component {
  unsubscribeFromAuth = null; //this is used for unsubscribing from the auth of firebase.

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //here we are subscribing the App compnt with the firebase project

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
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
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("look here", state.user.currentUser);
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
