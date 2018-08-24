import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createStackNavigator, createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import FirstPage from './screens/FirstPage';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import BasicFlatList from './component/BasicFlatList';
import LoginScreen from './screens/LoginScreen';


const AppStackNavigator = createStackNavigator(
  {
  Home: HomeScreen,
  Cart: SettingsScreen,
  Login: LoginScreen,
  },
);

AppStackNavigator.navigationOptions = {
  tabBarIcon: ({ focused, tintColor }) => (
    <Ionicons
      name={`ios-home${focused ? '' : '-outline'}`}
      size={30}
      color={tintColor}
    />
  ),
  tabBarOptions: {
    activeTintColor: '#00ADA7',

  },
};
const MainTabs = createBottomTabNavigator(
  {
    Home: AppStackNavigator,
    Cart: SettingsScreen,
  }
);
const AppNavigator = createSwitchNavigator({
  Login: FirstPage,
  Main: MainTabs,
});

export default class App extends React.Component {
 
  render() {
    return ( 
      <AppNavigator/>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE195',
    alignItems: 'center',
    justifyContent: 'center',
    margin:20,
  },
});
