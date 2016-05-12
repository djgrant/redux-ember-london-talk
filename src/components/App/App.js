import './app.styl';
import React, { Component } from 'react';
import SlideDeck from 'components/SlideDeck';

export default class App extends Component {
  render() {
    return (
      <SlideDeck
        slides={[
          'one',
          'two',
          'three'
        ]}
      />
    );
  }
}
