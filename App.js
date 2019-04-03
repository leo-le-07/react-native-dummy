/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {
  username: string,
  password: string,
};
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }

  onChange = (field) => (value) => {
    this.setState({
      [field]: value
    })
  }

  onLogin = () => {
    const { username, password } = this.state;
    Alert.alert('Credentials', `${username} + ${password}`);
  }

  render() {
    const { username, password } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to Pear App</Text>
        <TextInput
          value={username}
          placeholder={'Username'}
          style={styles.input}
          onChangeText={this.onChange('username')}
        />
        <TextInput
          value={password}
          placeholder={'Password'}
          style={styles.input}
          onChangeText={this.onChange('password')}
          secureTextEntry={true}
        />
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fdffd3',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    fontSize: 18,
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});
