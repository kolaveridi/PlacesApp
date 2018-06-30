import React from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';
 const ListItem =(props) =>(
   <TouchableOpacity onPress={props.onItemPressed}>
  <View>
  <Image source ={props.PlaceImage} style={styles.placeImage}/>
  <Text style={styles.listitem}>
   {props.placeName}
  </Text>
  </View>
  </TouchableOpacity>
);

const styles=StyleSheet.create({
  listitem:{
    width:"100%",
    padding:10,
    margin:5,
    backgroundColor:"#eee",
    flexDirection:"row",
    alignItems:"center"
  },
  placeImage:{
    marginRight:8,

  }
});
export default ListItem;
