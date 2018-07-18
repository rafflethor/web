import React, { Component } from 'react';
import HammerImage from '../../assets/hammer.svg';

import HammerStyles from './Hammer.css';

class Hammer extends Component {
  render() {
    return (
      <div className={HammerStyles.HammerContainer}>
        <img className={HammerStyles.Hammer} src={HammerImage} alt=""/>
        <span className={HammerStyles.CountDown}>
          {this.props.countDown}
        </span>
      </div>
    );
  }
}

export default Hammer;
