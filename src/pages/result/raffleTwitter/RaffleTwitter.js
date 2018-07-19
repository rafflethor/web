import React, { Component } from 'react';

class RaffleTwitter extends Component {
  render() {
    console.log(this.props.luckyList)

    return (
      <ol>
        {this.props.luckylist}
      </ol>
    );
  }
}

export default RaffleTwitter;
