import React, { Component, Fragment } from 'react';
import RaffleTwitterStyles from './RaffleTwitter.css';

class RaffleTwitter extends Component {
  render() {
    const luckyList = this.props.luckyList.map((lucky, index) => 
      <li key={lucky.uuid} className={RaffleTwitterStyles.ListItem}>
        <div>{index + 1}</div>
        <img
          className={RaffleTwitterStyles.Image}
          src={lucky.picture.thumbnail}
          alt={`${lucky.name.first} ${lucky.name.last} profile`} />
        <div className={RaffleTwitterStyles.UserData}>
          <div>
            <strong>{lucky.twitter.handle}</strong>
          </div>
          <div>
          {lucky.name.first} {lucky.name.last}
          </div>
        </div>
      </li>
    );

    const singleLucky = this.props.luckyList.map((lucky, index) => 
      <Fragment key={lucky.uuid}>
        <div><strong>{lucky.twitter.handle}</strong></div>
        <div>{lucky.name.first} {lucky.name.last}</div>
        <img
          className={RaffleTwitterStyles.Image}
          src={lucky.picture.large}
          alt={`${lucky.name.first} ${lucky.name.last} profile`} />
      </Fragment>
    );

    const luckyListLength = this.props.luckyList.length === 1 ? true : false;

    return (
      <Fragment>
        {luckyListLength &&
          <div className={RaffleTwitterStyles.Single}>
            {singleLucky}
          </div>
        }
        {!luckyListLength &&
          <ol className={RaffleTwitterStyles.OrderedList}>
            {luckyList}
          </ol>
        }
      </Fragment>
    );
  }
}

export default RaffleTwitter;
