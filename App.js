import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ListItem from './src/components/ListItem';
import PlaceInput from "./src/components/PlaceInput";
import PlaceList from "./src/components/PlaceList";
import PlaceImage from "./src/assets/download.jpeg";
import PlaceDetail from "./src/components/PlaceDetail";
export default class App extends React.Component {
  state={
    places:[],
    selectedPlace:null
  }

   placeAddedHandler =val=>{
     console.log('val is',val);
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(),
          value: val,
          image:PlaceImage
        })
      };
    });
  };

  placeSelectHandler =id=>{
    this.setState(prevState =>{
      return{
        selectedPlace:prevState.places.find(place=>{
          return place.key ===id;
        })
      };
    });
  };
  placeDeleteHandler =() =>{
    this.setState(prevState => {
      return {
        places:prevState.places.filter(place =>{
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      };
    });
  };
  modelClosedHandler =() =>{
    this.setState({
      selectedPlace:null
    })
  }

  render() {
    return (
      <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      <PlaceList places={this.state.places} onItemSelected={this.placeSelectHandler}/>
      <PlaceDetail
      selectedPlace={this.state.selectedPlace}
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
