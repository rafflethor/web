import React, { Component } from 'react';
import logo from '../../logo.svg';
import styles from './Registry.css';

class Registry extends Component {
  render() {
    return (
      <main className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Welcome to React</h1>
          <p className={styles.AppIntro}>
            To get started, edit <code>src/App.js</code> and save to reload x.
          </p>
        </header>
      </main>
    );
  }
}

export default Registry;
