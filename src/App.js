import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Registry from './pages/registry/Registry';
import Raffle from './pages/raffle/Raffle';

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
            <Route exact path="/raffle/:id" component={Raffle} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
