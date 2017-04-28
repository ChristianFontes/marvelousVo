'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Logo from '../components/logo';
import ButtonAuth from '../components/buttonAuth';
import LoginMessage from '../components/loginMessage';
import LabelLogin from '../components/labelLogin';

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, state, actions } = this.props;
    return (
      <Container>
        <Logo />
        <LabelLogin label={'Email:'} setInput={ actions.setEmail }/>
        <LabelLogin label={'Password:'} password={true} setInput={ actions.setPassword }/>
        <ButtonAuth history={history} title={'Iniciar Sesion'} {...actions} email={state.email} password={state.password}/>
        <LoginMessage loginMessage={state.message}/>
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
