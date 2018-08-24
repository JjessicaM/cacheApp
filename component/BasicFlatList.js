import React, {Component} from 'react';
import {FlatList, StyleSheet, Text, View,Image } from 'react-native';
import flatListData from '../data/flatListData';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
  },
  flatlistItem: {
    color: '#FFF8D8',
    padding: 5,
    fontSize: 15,
  },
  flatlistDescription: {
    color: '#FFF8D8',
    paddingBottom: 20,
    fontSize: 15,
  },
});


class FlatListItem  extends Component{
  render() {
    return(
      <View style={styles.container}> 
        <View>
          <Image source={require('../assets/images/chili.png')}
          style={{width:100, height: 100, margin:5 }}/>
        </View>
        <View>
          <Text style={styles.flatlistItem}>{this.props.item.name}</Text> 
          <Text style={styles.flatlistDescription}>{this.props.item.candyDescription}</Text>
        </View>
        
      </View>
    );
  }
} 
export default class BasicFlatList extends Component {
  
 
  render(){
    return(
      <View>
          
          <FlatList 
          data ={flatListData}
          renderItem = {({item, index})=> {
            return(
            <FlatListItem item={item} index={index}>

            </FlatListItem>)
          }}
            /> 
      </View> 
    )
  }
}

