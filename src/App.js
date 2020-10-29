import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Login from "./component/Login";
import Register from "./component/Register";
import Footer from "./component/Footer";
import Header from "./component/Header";



class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;
