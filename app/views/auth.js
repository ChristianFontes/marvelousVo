'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Logo from '../components/logo';
import ButtonAuth from '../components/buttonAuth';
import LoginMessage from '../components/loginMessage';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, state, actions } = this.props;
    return (
      <Container>
        <Logo />
        <ButtonAuth history={history} title={state.name_button} {...actions}/>
        <LoginMessage loginMessage={state.message} />
      </Container>
    );
  }
}

export default connect(state => ({
    state: state.auth
  }),
  (dispatch) => ({
    actions: bindActionCreators(authActions, dispatch)
  })
)(Auth);
