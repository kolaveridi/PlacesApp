import { createStore, combineReducers ,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import PlacesReducer from './places.js';


const rootReducer = combineReducers({
    places:  PlacesReducer
});



// store.js
export function configureStore() {
 const store = createStore(
 rootReducer
 )
 console.log('Inside function');
 console.log(store);
 return store;
};

export const store = configureStore();
console.log('store is');
console.log(store);
