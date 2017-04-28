import React, { Component } from 'react';
import { Item, Label, Input } from 'native-base';

export default class LabelLogin extends Component {
    render() {
      const { label, password, setInput } = this.props;
        return (
          <Item inlineLabel>
              <Label>{label}</Label>
              <Input
                secureTextEntry={password}
                onChangeText={(text) => {
                  setInput(text);
                }} />
          </Item>
        );
    }
}
