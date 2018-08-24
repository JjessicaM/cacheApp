import React from 'react';
import {
  Text,
  View,
  Button,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  AsyncStorage,
  Image,
} from 'react-native';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      err: '',
    };
  }

  loggingIn = async () => {
  };

  handleUsername = username => {
    this.setState({ username });
  };

  handlePassword = password => {
    this.setState({ password });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.container}>
          <Image style={styles.imag} source= {require('../assets/logo.png')}/>
          <Text style={styles.text}>{this.state.err}</Text>
          <TextInput
            style={styles.input}
            onChangeText={this.handleUsername}
            value={this.state.username}
            placeholder="Username"
            placeholderTextColor="#D9C099"
            returnKeyType="next"
            onloginEditing={() => this.passwordInput.focus()}
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#D9C099"
            secureKeyType="go"
            secureTextEntry
            onChangeText={this.handlePassword}
            value={this.state.password}
          />
          <Button title="Log In" color="#C24366" onPress={this.loggingIn} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor:'#00ADA7'
  },
  text: {
    textAlign: 'center',
    color: '#FFF8D8',
  },
  input: {
    height: 50,
    backgroundColor: '#FFF8D8',
    paddingHorizontal: 10,
    marginBottom: 25,
    color: '#00ADA7',
  },
  imag: {
    width: 100,
    height: 100,
    left: 130,
  }
});
