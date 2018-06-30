import {combineReducers} from 'redux';
import PlacesReducer from './places.js';

export default combineReducers({
   places:PlacesReducer
});
