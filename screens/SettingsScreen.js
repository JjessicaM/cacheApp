import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';

class SettingsScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>SettingsScreen</Text>
      </View>
    );
  }
}
export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A8E0BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
});