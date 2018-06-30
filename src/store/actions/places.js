import {ADD_PLACE,DELETE_PLACE,DESELECT_PLACE,SELECT_PLACE} from './actiontypes';

export const addPLace =(placeName) =>{
  return{
    type:ADD_PLACE,
    payload:{
      placeName:placeName
    }
  };
};

export const deletePlace =()=>{
  return{
    type:DELETE_PLACE
  };
}
export const selectedPlace =(key) =>{
  return{
    type:SELECT_PLACE,
    payload:{
      placekey:key
    }
  }
};
export const deselectPlace =()=>{
  return {
    type:DESELECT_PLACE
  }
};
