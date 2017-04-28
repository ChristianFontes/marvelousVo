import React, { Component } from 'react';
import { Item, Label, Input } from 'native-base';

export default class LoginMessage extends Component {
    render() {
      const { loginMessage } = this.props;
        return (
          <Item inlineLabel>
              <Label>Username</Label>
              <Input />
          </Item>
        );
    }
}
