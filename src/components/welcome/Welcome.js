import React, { Component } from 'react';

import WelcomeStyles from './Welcome.css';

class Welcome extends Component {
  render() {
    return (
      <div>
        <p className={WelcomeStyles.Intro}>{this.props.children}</p>
        <h2 className={WelcomeStyles.Event}>{this.props.event}</h2>
      </div>
    );
  }
}

export default Welcome;
