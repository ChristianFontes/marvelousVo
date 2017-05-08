import React, { Component } from 'react';
import { Button, Icon, Text } from 'native-base';
import { StyleSheet, View } from 'react-native';
import { authByGoogle } from '../firebase/auth';

const styles = StyleSheet.create({
  botton: {
    marginTop: 10,
    alignItems:'center',
    paddingLeft: 15,
    paddingRight: 15
  }
});

export default class ButtonNetwork extends Component {
    _buttonRender(network, icon, color) {
      if (color == 'info') {
        return(
          <Button block iconLeft info style={styles.button}>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }else if (color == 'danger') {
        return(
          <Button block iconLeft danger onPress={() => authByGoogle()}>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }else {
        return(
          <Button block iconLeft>
              <Icon name={icon} />
              <Text>{network}</Text>
          </Button>
        )
      }
    }
    render() {
      const { network, icon, color } = this.props;
        return (
          <View style={styles.botton}>
              { this._buttonRender(network, icon, color) }
          </View>
        );
    }
}
