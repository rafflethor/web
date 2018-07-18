import React, { Component } from 'react';

import raffleFormStyles from './RaffleForm.css';

class RaffleForm extends Component {
  
  onSubmit (event) {
    event.preventDefault();
    console.log('patata');
  }

  render() {
    return (
      <form className={raffleFormStyles.Form} onSubmit={this.onSubmit}>
        <label htmlFor="raffleId">ID de la rifa</label>
        <input id="raffleId" type="text" required />
        {/* If requires an email */}
        <input id="raffleMail" type="email" required />
        {/* /If requires an email */}
        <input type="submit" value="¡Participar!" />
      </form>
    );
  }
}

export default RaffleForm;
