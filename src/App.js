import React, { Component } from 'react';
import './App.css';
import List from './components/ItemList';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ViewList from './components/ViewDetails';

class App extends Component {
    
  render() {
    return (
      <div className="p-3" style={{background:'#eeeeee'}}>
        <Router >
          <Switch>
            <Route exact path='/' component={List}></Route>
            <Route exact path='/list/view/:id' component={ViewList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
