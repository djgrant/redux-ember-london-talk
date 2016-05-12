import { combineReducers } from 'redux';
import slideDeck from 'components/SlideDeck/duck';
import boxModel from 'components/BoxModel/duck';

export default combineReducers({
  slideDeck,
  boxModel
});
