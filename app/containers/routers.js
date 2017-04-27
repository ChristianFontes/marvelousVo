import React, { Component } from 'react'
import { Container } from 'native-base';
import { NativeRouter, Route, Link, Redirect, withRouter } from 'react-router-native';

import Auth from '../views/auth';
import Dashboard from '../views/dashboard';

const AuthExample = () => (
  <NativeRouter>
    <Container>
      <Route exact path="/" component={Auth}/>
      <Route exact path="/dashboard" component={Dashboard}/>
    </Container>
  </NativeRouter>
)

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

export default AuthExample
