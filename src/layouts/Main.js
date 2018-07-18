import React, { Component } from 'react';
import MainLayoutStyles from './Main.css';
import LogoStyles from '../styles/logo.css';

class MainLayout extends Component {
  render() {
    return (
      <main className={MainLayoutStyles.Main}>
        <header>
          <h1>RaffleThor</h1>
        </header>
        {this.props.children}
      </main>
    );
  }
}

export default MainLayout;
