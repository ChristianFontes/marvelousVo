import React, { Component } from 'react';
import { Container, Content, Button, Icon, Text } from 'native-base';
import { loginByEmail } from '../firebase/auth';

export default class ButtonAuth extends Component {
    _checkData(login, loginMessage, history, email, password) {
      if (email && password) {
        loginByEmail(login, loginMessage, history, email, password);
      }
      else if (email.length == 0) {
        loginMessage('El campo de Email es Requerido');
      }
      else if (password.length == 0) {
        loginMessage('El campo de Password es Requerido');
      }
      else if (email.length == 0 && password.length == 0) {
        loginMessage('Los campos Email y Password son Requeridos');
      }
    }
    render() {
      const { history, title, login, loginMessage, email, password } = this.props;
        return (
          <Button iconLeft onPress={() => this._checkData(login, loginMessage, history, email, password) }>
              <Icon name='home' />
              <Text>{title}</Text>
          </Button>
        );
    }
}
