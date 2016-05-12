import './app.styl';
import React, { Component } from 'react';
import Highlight from 'react-highlight';
import SlideDeck from 'components/SlideDeck';
import BoxModel from 'components/BoxModel';

const styles = {};

styles.fullscreen = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0
};

styles.fixed = Object.assign({}, styles.fullscreen, {
  top: '20%',
  maxWidth: '74%',
  margin: 'auto'
});

export default class App extends Component {
  render() {
    return (
      <SlideDeck
        slides={[
          <h1>Art of Reduxion</h1>,

          <div>
            <p>@danieljohngrant</p>
            <p>Lostmy.name</p>
            <p>@ldnalgos</p>
          </div>,

          <h2>The Problem</h2>,

          <Highlight className='js'>
            {function updateDOMDeDOM() {
              var value = DOM.find('#element').value; // COULD BE ANYTHING!
              var newValue = value * 'dave';
              DOM.find('#anotherElement').value(newValue); // SIDE EFFECT :0
            }.toString()}
          </Highlight>,

          <img src="http://danielgrant.co/redux-fel-talk/images/pure-calc-4x2.png" />,

          <h2>What is Redux?</h2>,

          <h2><blockquote>"Predictable state container"</blockquote></h2>,

          <Highlight className='js'>
{`{
  entities: {
    users: ['Jane', 'Lilly', 'Steve', 'Marc'],
    products: [
      { id: 1, name: 'The Very Hungry Caterpillar', cat: 'Book' },
      { id: 2, name: 'Desk', cat: 'Furniture' }
    ]
  },
  components: {
    gallery: {
      items: [
        { src: 'xyz.jpg', active: false }
      ]
    }
  }
}`}
          </Highlight>,

          <div>
            <h4>Current State + Action = New State</h4>
            <p>Every action advances the state forward</p>
          </div>,

          <div style={styles.fixed}>
            <BoxModel />
          </div>,

          <div>
            <h2>Resources</h2>
            <ul>
              <li>Redux docs - http://redux.js.org</li>
              <li>Redux creator - https://twitter.com/dan_abramov</li>
              <li>Eggheads screencasts - https://egghead.io/series/getting-started-with-redux</li>
              <li>Redux examples - https://github.com/reactjs/redux</li>
              <li>These slides - https://github.com/djgrant/redux-ember-london-talk</li>
              <li>Chris Pearce's slides - https://speakerdeck.com/chrisui/real-world-redux</li>
              <li>Coding demo - https://jsbin.com/xujumi/edit?js,console,output</li>
            </ul>
          </div>,

          <div>
            <h2>Be my friend</h2>
            <p>https://twitter.com/danieljohngrant</p>
            <p>http://www.meetup.com/London-Algorithms</p>
          </div>
        ]}
      />
    );
  }
}
