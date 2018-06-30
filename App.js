import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from './src/components/ListItem';
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import PlaceImage from "./src/assets/download.jpeg";
import PlaceDetail from "./src/components/PlaceDetail";
import reducers from './src/store/reducers/index.js';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {connect} from 'react-redux';
import {addPLace,deletePlace,selectPlace,deselectPlace} from './src/store/actions/index.js';
class App extends React.Component {

   placeAddedHandler =val=>{
    this.props.onAddPlace(val);
  };

  placeSelectHandler =id=>{
    this.props.onSelectPlace(id);
  };
  placeDeleteHandler =() =>{
  this.props.onDeletePlace();
  };
  modelClosedHandler =() =>{
    this.props.onDeslectPlace();
  }

  render() {
    return (
       <Provider store={createStore(reducers)}>
      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      <PlaceList places={this.props.places} onItemSelected={this.placeSelectHandler}/>
      <PlaceDetail
      selectedPlace={this.props.selectedPlace}
      onItemDeleted={this.placeDeleteHandler}
      onModalClosed={this.modelClosedHandler}
      />
      </View>
      </Provider>
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
  return {
    places:state.places.places,
    selectedPlace:state.places.selectPlace
  };
}
const mapDispatchToProps = dispatch =>{
  return {
   onAddPlace:(name)=>dispatch(addPLace(name)),
   onDeletePlace:()=>dispatch(deletePlace()),
   onSelectPlace:(id)=>dispatch(selectPlace(id)),
   onDeslectPlace:()=>dispatch(onDeslectPlace())
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
