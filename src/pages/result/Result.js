import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../reducers/result';

import Welcome from '../../components/welcome/Welcome';
import RaffleEmail from './raffleEmail/RaffleEmail';
import RaffleTwitter from './raffleTwitter/RaffleTwitter';

import ResultStyles from './Result.css'

/* Fetch examples */
import fetchSingleWinnersResult from './resultSingleWinner.json'
// import fetchMultipleWinnersResult from './resultMultipleWinners.json'

class Result extends Component {

    componentDidMount () {
        const raffleId = this.props.match.params.id
        const userHash = this.props.match.params.hash

        this.props.getRaffleResultRequest(raffleId, userHash)
    }

    render() {
        const raffleType = 'email'; /* email or twitter */

        /* CASE EMAIL */
        const hash = this.props.match.params.hash
        const status = this.props.didIWin ? 'lucky' : 'unlucky'; /* lucky or unlucky */

        /* CASE TWITTER */
        const luckyList = fetchSingleWinnersResult;

        let raffle;

        if (hash) {
            if (raffleType === 'email') {
                raffle = <RaffleEmail status={status} hash={hash} />;
            } else {
                raffle = <RaffleTwitter luckyList={luckyList} />;
            }
        }

    return (
      <main className={ResultStyles.Main}>
        <Welcome event={this.props.organizationName}>
        El martillo de Thor ha decidido que <br/> en la rifa {this.props.raffleName} de
        </Welcome>
        { raffle }
        <a className={ResultStyles.Button} href="/">
          Probar con otra rifa
        </a>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = (state) => {
    return {
        raffleName: state.result.getIn(['result', 'raffle', 'name']),
        didIWin: state.result.getIn(['result', 'didIWin']),
        organizationName: state.result.getIn(['result', 'raffle', 'organization', 'name']),
        result: state.result.getIn(['result']),
    };
};

export default (
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(
            Result
        )
    )
);
