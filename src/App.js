import React, { Component } from 'react';
import Registry from './pages/registry/Registry';
import { Switch, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
        <Switch>
            <Route exact path="/" component={Registry} />
        </Switch>
    );
  }
}

export default App;
