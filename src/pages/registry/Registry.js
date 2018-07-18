import React, { Component } from 'react';

import Welcome from '../../components/welcome/Welcome'
import RaffleForm from '../../components/raffleForm/RaffleForm'

class Registry extends Component {
  render() {
    return (
      <main>
        <Welcome event="BCN Craftmanship 2019">
          Bienvenida a la rifa
        </Welcome>
        <RaffleForm />
      </main>
    );
  }
}

export default Registry;
