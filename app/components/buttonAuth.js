import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { loginByEmail } from '../firebase/auth';

const styles = StyleSheet.create({
  botton: {
    alignItems:'center',
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default class ButtonAuth extends Component {
    render() {
      const { history, title, login, loginMessage, email, password } = this.props;
        return (
          <View style={styles.botton}>
          <Button block warning iconLeft onPress={() => loginByEmail(login, loginMessage, history, email, password)}>
              <Icon name='home' />
              <Text>{title}</Text>
          </Button>
          </View>
        );
    }
}
