import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Container } from 'native-base';
import { NativeRouter, Route, Link, Redirect, withRouter } from 'react-router-native';

import Auth from '../views/auth';
import Dashboard from '../views/dashboard';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    true ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

class Routes extends Component {
  constructor(props) {
    super(props);
  }

  auth(auth) {
    // Si el usuario ha iniciado sesion correctamente
    if (auth) {
      return(
        <NativeRouter>
          <Container>
            <Route exact path="/" component={Auth}/>
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          </Container>
        </NativeRouter>
      )
    } else {
      //Usuario no ha iniciado sesion
      return(
        <NativeRouter>
          <Container>
            <Route path="/" component={Auth}/>
          </Container>
        </NativeRouter>
      )
    }

  }

  render() {
    const { state } = this.props;
    return(this.auth(state.auth))
  }
}

export default connect(state => ({
    state: state.auth
  })
)(Routes);
