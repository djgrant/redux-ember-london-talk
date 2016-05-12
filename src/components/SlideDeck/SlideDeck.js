import './slideDeck.styl';
import './theme.styl';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { navigateLeft, navigateRight } from './duck';

const LEFT_ARROW = 37;
const RIGHT_ARROW = 39;
const SHIFT = 16;

export class SlideDeck extends Component {
  constructor(props) {
    super(props);
    this.handleKeyDownUp = this.handleKeyDownUp.bind(this);
    this.keyMap = {};
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDownUp);
    window.addEventListener('keyup', this.handleKeyDownUp);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDownUp);
    window.removeEventListener('keyup', this.handleKeyDownUp);
    window.removeEventListener('click', this.handleClick);
  }

  isFirstSlide() {
    return this.props.activeSlide === 0;
  }

  isLastSlide() {
    return this.props.activeSlide === this.props.slides.length - 1;
  }

  handleKeyDownUp(e) {
    this.keyMap[e.keyCode] = e.type === 'keydown';

    if (e.type === 'keyup') return;

    if(this.keyMap[RIGHT_ARROW] && this.keyMap[SHIFT] && !this.isLastSlide()) {
      this.props.onNavigateRight()
    }

    if(this.keyMap[LEFT_ARROW] && this.keyMap[SHIFT] && !this.isFirstSlide()) {
      this.props.onNavigateLeft();
    }
  }

  render() {
    return (
      <div className="slides">
        {this.props.slides.map((slide, index) => (
          <div
            className="slide"
            key={index}
            hidden={this.props.activeSlide !== index}>
            <div className="slide-content">
              {slide}
            </div>
          </div>
        ))}
      </div>
    );
  }
}

SlideDeck.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.node),
  activeSlide: PropTypes.number,
  onNavigateLeft: PropTypes.func,
  onNavigateRight: PropTypes.func
};

const mapState = state => ({
  activeSlide: state.slideDeck
});

const mapDispatch = dispatch => ({
  onNavigateLeft: () => dispatch(navigateLeft()),
  onNavigateRight: () => dispatch(navigateRight())
});

export default connect(mapState, mapDispatch)(SlideDeck);
