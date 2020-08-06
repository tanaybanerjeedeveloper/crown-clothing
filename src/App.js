import React from "react";
import { Switch, Route } from "react-router-dom"; //this the library for 'routing'
import "./App.css";
//importing components
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}; // just creating a 'HatsPage' component locally in 'App' component

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
