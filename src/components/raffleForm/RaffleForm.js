import React, { Component } from 'react';
import { Form } from 'react-validify'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../reducers/registration';

import raffleFormStyles from './RaffleForm.css';

const Input = ({ error, ...props }) => (
  <React.Fragment>
    <input {...props} />
  </React.Fragment>
);

const VALIDATION_RULES = {
    raffleId: 'required|min:4|max:4'
}

class RaffleForm extends Component {

    handleSubmit (registration) {
        this.props.registerUser(registration)
    }

    render() {
        const emailField = this.props.missingEmail ? (
            <React.Fragment>
                <label htmlFor="raffleMail" className={raffleFormStyles.Label}>Dirección de correo</label>
                <Input id="raffleMail" name="email" type="email" placeholder="Email" required />
            </React.Fragment>
        ) : ('')

        const invalidRaffleId = this.props.invalidId ? (
            <span className={raffleFormStyles.Label}>Invalid Raffle ID</span>
        ) : ('')

        return (
            <Form rules={VALIDATION_RULES}>
                <div className={raffleFormStyles.Form}>
                <label htmlFor="raffleId" className={raffleFormStyles.Label}>ID de la rifa</label>
                <Input id="raffleId"
                       name="raffleId"
                       type="text"
                       placeholder="ID de la rifa" required />

                {/* If invalid raffle id */}
                { invalidRaffleId }
                {/* If invalid raffle id */}

                {/* If requires an email */}
                { emailField }
                {/* /If requires an email */}

                <Input submit type="button"
                       value="¡Participar!"
                       className={raffleFormStyles.Submit}
                       onClick={(values) => this.handleSubmit(values) }/>
                </div>
            </Form>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({...actionCreators}, dispatch)
});

const mapStateToProps = (state) => {
    return {
        missingEmail: state.registration.get('missingEmail'),
        invalidId: state.registration.get('invalidId')
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RaffleForm);
