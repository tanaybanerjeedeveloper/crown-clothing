import React from "react";
import { Switch, Route } from "react-router-dom"; //this the library for 'routing'
import "./App.css";
import { auth } from "./firebase/firebase.utils"; // Auth will be helping in making the app aware of which user signedin/out
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
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null; //this is used for unsubscribing from the auth of firebase.

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      //here we are subscribing the App compnt with the firebase project
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
