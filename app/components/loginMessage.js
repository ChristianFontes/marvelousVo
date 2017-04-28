import React, { Component } from 'react';
import { Text } from 'native-base';

export default class LoginMessage extends Component {
    render() {
      const { loginMessage } = this.props;
        return (
            <Text>{loginMessage}</Text>
        );
    }
}
