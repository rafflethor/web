import React, { Component } from 'react';

import Welcome from '../../components/welcome/Welcome'

class Raffle extends Component {
  render() {
    return (
      <main>
        <Welcome event="JSdayES 2019">
        Comienza la cuenta atrás de la rifa (ID rifa) de los <br/> de
        </Welcome>
      </main>
    );
  }
}

export default Raffle;
