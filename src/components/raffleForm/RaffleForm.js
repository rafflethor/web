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
        <label htmlFor="raffleId" className={raffleFormStyles.Label}>ID de la rifa</label>
        <input id="raffleId" type="text" placeholder="ID de la rifa" required />
        {/* If requires an email */}
        <label htmlFor="raffleMail" className={raffleFormStyles.Label}>Dirección de correo</label>
        <input id="raffleMail" type="email" placeholder="Email"  required />
        {/* /If requires an email */}
        <input type="submit" value="¡Participar!" className={raffleFormStyles.Submit} />
      </form>
    );
  }
}

export default RaffleForm;
