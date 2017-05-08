'use strict';

import React, {Component} from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { bindActionCreators } from 'redux';
import * as authActions from '../actions/authActions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Logo from '../components/logo';
import ButtonAuth from '../components/buttonAuth';
import ButtonNetwork from '../components/buttonNetwork';
import LoginMessage from '../components/loginMessage';
import LabelLogin from '../components/labelLogin';

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  centerItems: {
    flex:1,
    justifyContent:'center'
  }
});

class Auth extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history, state, actions } = this.props;
    return (
      <Container>
        <Image source={require('../images/background.png')} style={styles.backgroundImage}>
          <View style={styles.centerItems}>
            <Logo/>
            <LabelLogin label={'Email:'} setInput={ actions.setEmail }/>
            <LabelLogin label={'Password:'} password={true} setInput={ actions.setPassword }/>
            <LoginMessage loginMessage={state.message}/>
            <ButtonAuth history={history} title={'Iniciar Sesion'} {...actions} email={state.email} password={state.password}/>
            <ButtonNetwork network='Facebook' icon='logo-facebook'/>
            <ButtonNetwork network='Twitter' icon='logo-twitter' color='info'/>
            <ButtonNetwork network='Google' icon='logo-google' color='danger'/>
          </View>
        </Image>
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
