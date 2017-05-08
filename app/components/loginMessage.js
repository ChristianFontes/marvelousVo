import React, { Component } from 'react';
import { Text } from 'native-base';
import { StyleSheet, View } from 'react-native';

const text = {
    textAlign: 'center',
    marginTop: 10
  }

export default class LoginMessage extends Component {
    render() {
      const { loginMessage } = this.props;
        return (
            <Text style={text}>{loginMessage}</Text>
        );
    }
}
