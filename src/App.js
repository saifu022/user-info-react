import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import UserDetails from "./components/UserDetails/UserDetails";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/user/:id">
            <UserDetails/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
