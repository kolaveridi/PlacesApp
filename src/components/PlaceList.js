import React from 'react';
import {  StyleSheet ,ScrollView,FlatList} from 'react-native';

import ListItem from './ListItem';
const placeList = props => {

  return (
    <FlatList
      style={styles.listContainer}
      data={props.places}
      renderItem={(info) => (

        <ListItem
          placeName={info.item.value}
          PlaceImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};


const styles = StyleSheet.create({
    listContainer: {
      width: "100%"
    }
});

export default placeList;;
