import './boxModel.styl';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Highlight from 'react-highlight';
import classNames from 'classnames';
import { declareBoxes, activateBox, getActiveID } from './duck';
import snippets from './snippets';

export const mapState = state => ({
  boxes: state.boxModel,
  activeId: getActiveID(state)
});

export const mapDispatch = dispatch => ({
  declareBoxes: boxes => dispatch(declareBoxes(boxes)),
  activateBox: id => dispatch(activateBox(id))
});

export class ReduxModel extends Component {
  componentWillMount() {
    this.props.declareBoxes(
      ['Action', 'Reducer', 'Subscriber', 'Selector', 'View']
    );
  }

  handleBoxClick(id) {
    this.props.activateBox(id);
  }

  render() {
    return (
      <div>
        <div className="boxes">
          {this.props.boxes.map(box => (
            <a
              key={box.id}
              className={classNames(
                'box',
                { active: box.active }
              )}
              onClick={() => this.handleBoxClick(box.id)}>
              {box.id}
            </a>
          ))}
        </div>
        <div className="code">
          {this.props.activeId && (
            <Highlight className='js'>
              {snippets[this.props.activeId].toString()}
            </Highlight>
          )}
        </div>
      </div>
    );
  }
};

export default connect(mapState, mapDispatch)(ReduxModel);
