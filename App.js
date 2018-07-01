import React, { Component } from "react";
//import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import store from './src/store/reducers/index.js';
import {Provider} from 'react-redux';
//import {createStore} from 'redux';
//import {connect} from 'react-redux';
import Home from './Home.js';
export default class App extends React.Component {
  render() {
    console.log('inside App');
    console.log(store);
       return (
           <Provider store={store}>
               <Home />
           </Provider>
       );
   }

}
