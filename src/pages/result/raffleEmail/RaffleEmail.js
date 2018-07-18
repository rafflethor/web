import React, { Component } from 'react';
import RaffleEmailStyles from './RaffleEmail.css';

class RaffleEmail extends Component {
  
  render() {
    const luck = this.props.status;

    return (
      <div className={RaffleEmailStyles.Container}>
        <div className={RaffleEmailStyles.Message}>
          {luck === 'lucky' ? '¡has ganado!' : 'Oh... no ha habido suerte'}
        </div>
        <p>Odín estaba de tu parte :)</p>
        <p>Recoge tu premio dando este hash</p>
      </div>
    );
  }
}

export default RaffleEmail;
