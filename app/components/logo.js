'use strict';
import React, { Component } from 'react';
import { Thumbnail } from 'native-base';
export default class Logo extends Component {
    render() {
        return (
          <Thumbnail style={{width: 80, height: 80, borderRadius: 40}} source={require('../images/logo.jpg')} />
        );
    }
}
