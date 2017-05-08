'use strict';

import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import * as counterActions from '../actions/counterActions';
import { connect } from 'react-redux';
import { Container, Content } from 'native-base';
import Toolbar from '../components/toolbar';
import Counter from '../components/counter';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { state, actions } = this.props;
    return (
      <Container>
        <Toolbar name={'Dashboard'}/>
        <Content>
          <Counter counter={state.count} {...actions} />
        </Content>
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
)(Dashboard);
