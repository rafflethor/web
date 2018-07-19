import React, { Component, Fragment } from 'react';
import RaffleEmailStyles from './RaffleEmail.css';

class RaffleEmail extends Component {
  
  render() {
    const luck = this.props.status;

    return (
      <div className={RaffleEmailStyles.Container}>
        <div className={RaffleEmailStyles.Message}>
          {luck === 'lucky' ? '¡has ganado!' : 'Oh... no ha habido suerte'}
        </div>
        {luck === 'lucky' &&
          <Fragment>
            <p>Odín estaba de tu parte :)</p>
            <p className={RaffleEmailStyles.Hash}> Recoge tu premio dando este hash <strong> {this.props.hash} </strong></p>
          </Fragment>
        }
      </div>
    );
  }
}

export default RaffleEmail;
