import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../reducers/raffle';

import Welcome from '../../components/welcome/Welcome';
import Hammer from '../../components/hammer/Hammer';

/**
 * Represents an real time raffle
 *
 * @since 0.1.0
 */
class Raffle extends Component {

    /**
     * Gets the raffle id present in the route url
     *
     * @return the raffle id
     * @since 0.1.0
     */
    getRaffleId () {
        return this.props.match.params.id;
    }

    /**
     * Gets the user hash present in the route url
     *
     * @return the user hash for the current raffle
     * @since 0.1.0
     */
    getUserHash () {
        return this.props.match.params.hash;
    }

    componentDidMount () {
        const raffleId = this.getRaffleId();
        const userHash = this.getUserHash();

        this.props.connectToRaffle(raffleId, userHash);
    }

    componentDidUmount () {
        this.props.disconnectFromRaffle();
    }

    shouldComponentUpdate (nextProps, nextState) {
        if (nextProps.finished) {
            const raffleId = this.getRaffleId();
            const userHash = this.getUserHash();

            this.props.showRaffleResult(raffleId, userHash)
        }
        return !nextProps.finished
    }

    render() {
        return (
            <main>
                <Welcome event={this.props.eventName}>
                    Comienza la cuenta atrás <br/> de la rifa {this.props.raffleName} de
                </Welcome>
                <Hammer countDown={this.props.countdown}></Hammer>
            </main>
        );
    }
};

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators(actionCreators, dispatch)
});

const mapStateToProps = (state) => {
    return {
        eventName: state.raffle.get('eventName'),
        raffleName: state.raffle.get('raffleName'),
        countdown: state.raffle.get('countdown'),
        result: state.raffle.get('result'),
        finished: state.raffle.get('finished')
    };
};

export default (
    withRouter(
        connect(mapStateToProps, mapDispatchToProps)(
            Raffle
        )
    )
);
