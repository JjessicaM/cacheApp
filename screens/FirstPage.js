import React, { Component } from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';

class FirstPage extends Component {

  static navigationOptions ={
    header: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source = {require ('../assets/logo.png')} />
        <View >
          <Button 
          title='Enter' 
          color='#C24366'
          onPress={() => this.props.navigation.navigate('Home')}/>
        </View>
      </View>
    );
  }
}
export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00ADA7',
    alignItems:'center',
    justifyContent: 'center',
  },
});