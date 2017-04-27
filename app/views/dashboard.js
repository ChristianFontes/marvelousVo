'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import Toolbar from '../components/toolbar';
import Counter from '../components/counter';
import {
  StyleSheet,
  View,
  AppRegistry,
  TouchableHighlight
} from 'react-native'

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('dashboard ', this.props);
    const { history } = this.props;
    return (
      <Container>
        <Toolbar/>
        <Content>
          <Counter/>
        </Content>
      </Container>
    );
  }
}
