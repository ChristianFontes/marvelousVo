'use strict';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import { Container } from 'native-base';
import Counter from '../components/counter';
import Toolbar from '../components/toolbar';

// @connect(state => ({
//   state: state.counter
// }))
class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    const { state, actions } = this.props;
    return (
      <Container>
        <Toolbar name={state.titleToolbar}/>
        <Counter
          counter={state.count}
          {...actions} />
      </Container>
    );
  }
}

export default connect(state => ({
    state: state.counter
  }),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
)(Main);
