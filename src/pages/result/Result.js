import React, { Component } from 'react';

import Welcome from '../../components/welcome/Welcome';
import RaffleEmail from './raffleEmail/RaffleEmail';
import RaffleTwitter from './raffleTwitter/RaffleTwitter';

import ResultStyles from './Result.css'

class Result extends Component {
  
  render() {
    /* TODO Sustituir por el ID de la rifa que viene en los parameters */
    const raffleId = 'A4KF'; 


    const raffleType = 'email'; /* unlucky */ 
    const status = 'lucky'; /* unlucky */ 
    const hash = 'ojiajuyfe9823ilo8nfew9j8wnhlafjlyafd978joqe'; /* optional */ 
    const luckyList = [
      {
        nick: 'xaviju'
      }
    ]

    let raffle;

    if (raffleType === 'email') {
      raffle = <RaffleEmail status={status} hash={hash} />;
    } else {
      raffle = <RaffleTwitter lucky={luckyList} />;
    }
    
    return (

      <main className={ResultStyles.Main}>
        <Welcome event="JSdayES 2019">
        El martillo de Thor ha decidido que <br/> en la rifa {raffleId} de
        </Welcome>
        { raffle }
        <a className={ResultStyles.Button} href="/">
          Probar con otra rifa
        </a>
      </main>
    );
  }
}

export default Result;
