'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _redux = require('redux');

var _counterActions = require('../actions/counterActions');

var counterActions = babelHelpers.interopRequireWildcard(_counterActions);

var _reactRedux = require('react-redux');

var _nativeBase = require('native-base');

var _toolbar = require('../components/toolbar');

var _toolbar2 = babelHelpers.interopRequireDefault(_toolbar);

var _counter = require('../components/counter');

var _counter2 = babelHelpers.interopRequireDefault(_counter);

var Dashboard = function (_Component) {
  babelHelpers.inherits(Dashboard, _Component);

  function Dashboard(props) {
    babelHelpers.classCallCheck(this, Dashboard);
    return babelHelpers.possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this, props));
  }

  babelHelpers.createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          state = _props.state,
          actions = _props.actions;

      return _react2.default.createElement(
        _nativeBase.Container,
        null,
        _react2.default.createElement(_toolbar2.default, { name: 'Dashboard' }),
        _react2.default.createElement(
          _nativeBase.Content,
          null,
          _react2.default.createElement(_counter2.default, babelHelpers.extends({ counter: state.count }, actions))
        )
      );
    }
  }]);
  return Dashboard;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(function (state) {
  return {
    state: state.counter
  };
}, function (dispatch) {
  return {
    actions: (0, _redux.bindActionCreators)(counterActions, dispatch)
  };
})(Dashboard);