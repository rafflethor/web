import React, { Component } from 'react';

import Welcome from '../../components/welcome/Welcome'
import RaffleForm from '../../components/raffleForm/RaffleForm'

class Registry extends Component {
    render() {
        return (
            <main>
                <Welcome event="7° Aniversario Kaleidos">
                    Bienvenido a
                </Welcome>
                <RaffleForm />
            </main>
        );
    }
}

export default Registry;
