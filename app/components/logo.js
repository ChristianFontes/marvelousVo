'use strict';
import React, { Component } from 'react';
import { Thumbnail } from 'native-base';
import { StyleSheet, View } from 'react-native';
import logoImage from '../images/logo.png';

const logo = {
  width: 80,
  height: 80,
  borderRadius: 40,
  marginBottom: 15
}

const styles = StyleSheet.create({
  logo: {
    alignItems:'center'
  }
});

export default class Logo extends Component {
    render() {
        return (
          <View style={styles.logo}>
            <Thumbnail style={logo} source={logoImage} />
          </View>
        );
    }
}
