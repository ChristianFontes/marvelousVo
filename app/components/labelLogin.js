import React, { Component } from 'react';
import { Item, Label, Input } from 'native-base';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  label: {
    backgroundColor: '#fff',
    opacity: 0.9,
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default class LabelLogin extends Component {
    render() {
      const { label, password, setInput } = this.props;
        return (
          <View style={styles.label}>
          <Item inlineLabel>
              <Label>{label}</Label>
              <Input
                secureTextEntry={password}
                onChangeText={(text) => {
                  setInput(text);
                }} />
          </Item>
          </View>
        );
    }
}
