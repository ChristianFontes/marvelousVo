import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import { loginByEmail } from '../firebase/auth';

export default class ButtonAuth extends Component {
    render() {
      const { history, title, login, loginMessage } = this.props;
        return (
          <Button iconLeft onPress={() => loginByEmail(login, loginMessage, history) }>
              <Icon name='home' />
              <Text>{title}</Text>
          </Button>
        );
    }
}
