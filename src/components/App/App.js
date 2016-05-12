import './app.styl';
import React, { Component } from 'react';
import SlideDeck from 'components/SlideDeck';

const styles = {
  fullscreen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};

export default class App extends Component {
  render() {
    return (
      <SlideDeck
        slides={[
          <div>
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
          </div>,
          <div style={styles.fullscreen}>
            two
          </div>,
          'three'
        ]}
      />
    );
  }
}
