import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
//import ListItem from './src/components/ListItem';
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
//import PlaceImage from "./src/assets/download.jpeg";
import PlaceDetail from "./src/components/PlaceDetail";
//import configureStore from './src/store/reducers/index.js';
//import {Provider} from 'react-redux';
//import {createStore} from 'redux';
import {connect} from 'react-redux';
import {addPLace,deletePlace,selectedPlace,deselectPlace} from './src/store/actions';

//const store=configureStore();

class Home extends React.Component {

   placeAddedHandler =val=>{
     console.log('Val is ',val);
     console.log(val);
    this.props.onAddPlace(val);
  };

  placeSelectHandler =id=>{
    console.log('id is');
    this.props.onSelectPlace(id);
  };
  placeDeleteHandler =() =>{
    console.log('inside delete handler');
  this.props.onDeletePlace();
  };
  modelClosedHandler =() =>{
    console.log('iinside close handler');
    this.props.onDeslectPlace();
  }

  render() {
    console.log('Inside render function');
    return (

      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      <PlaceList places={this.props.places} onItemSelected={this.placeSelectHandler}/>
      <PlaceDetail
      selectedPlace={this.props.selectedPlace}
      onItemDeleted={this.placeDeleteHandler}
      onModalClosed={this.modelClosedHandler}
      />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
const mapStateToProps=state => {
  console.log('Inside mapStateToProps ');
  console.log(state );
  return {
    places:state.places.places,
    selectedPlace:state.places.selectPlace
  };
}
const mapDispatchToProps = dispatch =>{
  return {
   onAddPlace:(name)=>dispatch(addPLace(name)),
   onDeletePlace:()=>dispatch(deletePlace()),
   onSelectPlace:(id)=>dispatch(selectedPlace(id)),
   onDeslectPlace:()=>dispatch(deselectPlace())
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(Home);
