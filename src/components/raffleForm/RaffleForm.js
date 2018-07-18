import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators, selectors } from '../../reducers/registration';

import raffleFormStyles from './RaffleForm.css';

class RaffleForm extends Component {

    onSubmit (event) {
        event.preventDefault();
        this.props.registerUser({})
    }

    render() {
        return (
            <form className={raffleFormStyles.Form} onSubmit={(ev) => this.onSubmit(ev) }>
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

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({...actionCreators}, dispatch)
});

const mapStateToProps = (state) => {
    return {
        registration:  selectors.getEvents(state)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaffleForm);
