import React, { Component } from 'react';

import Welcome from '../../components/welcome/Welcome'
import Hammer from '../../components/hammer/Hammer'

class Raffle extends Component {
  
  render() {
    /* TODO Sustituir por el ID de la rifa que viene en los parameters */
    const raffleId = 'A4KF'; 
    
    /* TODOSustituir por timer */
    const timer = 10;

    return (
      <main>
        <Welcome event="JSdayES 2019">
        Comienza la cuenta atrás <br/> de la rifa {raffleId} de
        </Welcome>
        <Hammer countDown={timer}></Hammer>
      </main>
    );
  }
}

export default Raffle;
