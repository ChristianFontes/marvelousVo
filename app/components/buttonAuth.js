import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import { NativeRouter, Route, Link, Redirect, withRouter } from 'react-router-native';
export default class ButtonAuth extends Component {
    render() {
      console.log('button ',this.props);
      const { history } = this.props;
        return (
          <Button iconLeft onPress={() => {
            history.replace('/dashboard');
            }}>
              <Icon name='home' />
              <Text>Iniciar Sesion</Text>
          </Button>
        );
    }
}
