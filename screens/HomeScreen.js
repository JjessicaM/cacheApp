import React, { Component } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import { SearchBar } from 'react-native-elements';
import BasicFlatList from '../component/BasicFlatList';
import LoginScreen from './LoginScreen';
import flatListData from '../data/flatListData';

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Dulce Pigüi',
    headerRight: (
      <Button title='Log in' color='#00ADA7' onPress={() => navigation.navigate('Login')} />
    ),
  });
 

  render () {
    return (
      <View style={styles.container}>
        <SearchBar
        inputStyle={{backgroundColor:'#FFF8D8', height: 30}}
        containerStyle={{backgroundColor: '#FFF8D8', borderColor: null ,height: 45}}
        placeholderTextColor='#D9C099'
        placeholder = 'buscar...'
        platform='Android'
        
        />
        <BasicFlatList/>
      </View>
    );
  }
}


export default HomeScreen;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C24366',
  },
});