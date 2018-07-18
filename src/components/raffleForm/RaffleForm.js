import React, { Component } from 'react';

/* import raffleFormStyles from './RaffleForm.css'; */

class RaffleForm extends Component {
  
  onSubmit (event) {
    event.preventDefault();
    console.log('patata');
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="raffleId">ID de la rifa</label>
        <input id="raffleId" type="text" required />
        <input type="submit" />
      </form>
    );
  }
}

export default RaffleForm;
