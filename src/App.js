import React, { Component, Fragment } from 'react';
import Registry from './pages/registry/Registry';
import { Switch, Route } from 'react-router-dom';

import AppStyles from './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className={AppStyles.Header}>
          <h1 className={AppStyles.Logo}>RaffleThor</h1>
        </header>
        <Switch>
            <Route exact path="/" component={Registry} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
