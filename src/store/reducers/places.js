import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actiontypes';
import PlaceImage from "../../../src/assets/download.jpeg";

const INITIAL_STATE={
  places:[],
  selectedPlace:null
}
const reducer =(action,state=INITIAL_STATE) =>{
  switch(action.type){
    case ADD_PLACE:
    return {
      ...state,
      places:state.places.concat({
        key:Math.random(),
        name:action.payload.placeName,
        image:placeImage
      })
    };
    case DELETE_PLACE:
    return{
      ...state,
      places:state.places.filter(place =>{
        return place.key !== state.selectedPlace.key;
      }),
      selectPlace:null
    };
    case SELECT_PLACE:
    return{
      ...state,
      selectedPlace:state.places.find(place=>{
        return place.key ===action.payload.placekey;
      })
    };
    case DESELECT_PLACE:
    return{
      ...state,
      selectPlace:null
    };

    default:
        return state;
  }
}
export default reducer;
