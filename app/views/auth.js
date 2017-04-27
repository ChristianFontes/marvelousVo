'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import { Container,Text } from 'native-base';
import Logo from '../components/logo';
import ButtonAuth from '../components/buttonAuth'

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('auth ', this.props);
    const { history } = this.props;
    return (
      <Container>
        <Logo />
        <ButtonAuth history={history}/>
      </Container>
    );
  }
}
