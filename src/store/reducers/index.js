import { createStore, combineReducers } from 'redux';

import PlacesReducer from './places.js';


const rootReducer = combineReducers({
    places:   PlacesReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
